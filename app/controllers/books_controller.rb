class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  
  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      books = @user.books
      render json: books, include: :user
    else
      @books = Book.all
      render json: @books, include: :genre
    end
  end

  def show
    render json: @book, include: :genre
  end

  def create
    @book = Book.new(book_params)
    @book.user = @current_user
    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def add_genre
    @book = Book.find(params[:id])
    @genre = Genre.find(params[:genre_id])
    @book.genres << @genre
    render json: @book, include: :genres
  end

  def destroy
    @book.destroy
  end
  
  private

  def set_book
    @book = Book.find(params[:id])
  end
  
  def book_params
    params.require(:book).permit(:title, :author, :description, :image, :genre_id)
  end
end
