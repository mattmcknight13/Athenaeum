class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]


  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  # Only allow a trusted parameter "allow list" through.
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
