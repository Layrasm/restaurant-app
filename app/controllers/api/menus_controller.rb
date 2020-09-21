class Api::MenusController < ApplicationController
  def index
    render json: Menu.all
  end

  def create
    menu = Menu.new(Menu_params)
    if menu.save
      render json: menu
    end
  end
 
  def update
    menu = Menu.find(params[:id])
    menu.update(name)
    render json: menu
  end 


  def destroy
    Menu.find(params[:id]).destroy
    render json: {message: "Menu deleted"}
  end


    private 
    
    def Menu_params
        params.require(:menu).permit(:name)
    end
end
