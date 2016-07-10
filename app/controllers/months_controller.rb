class MonthsController < ApplicationController
  before_action :set_month, only: [:show, :update, :destroy]

  # GET /months
  # GET /months.json
  def index
    @months = Month.all

    render json: @months
  end

  # GET /months/1
  # GET /months/1.json
  def show
    render json: @month
  end

  # POST /months
  # POST /months.json
  def create
    @month = Month.new(month_params)

    if @month.save
      render json: @month, status: :created, location: @month
    else
      render json: @month.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /months/1
  # PATCH/PUT /months/1.json
  def update
    @month = Month.find(params[:id])

    if @month.update(month_params)
      head :no_content
    else
      render json: @month.errors, status: :unprocessable_entity
    end
  end

  # DELETE /months/1
  # DELETE /months/1.json
  def destroy
    @month.destroy

    head :no_content
  end

  private

    def set_month
      @month = Month.find(params[:id])
    end

    def month_params
      params.require(:month).permit(:year, :month)
    end
end
