class HomeController < ApplicationController
  def index
  end


  def about
  end

  def execute_js                                                                                                     
    `node ./app/javascript/controllers/go.js`                                                                          
    render plain: 'JS execution completed'                                                                           
  end  

end
