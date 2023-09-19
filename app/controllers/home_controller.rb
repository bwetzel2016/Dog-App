class HomeController < ApplicationController
  def index
  end


  def about
  end

  def x_button                                                                                                     
    `node ./app/javascript/controllers/GO.js`                                                                          
    render plain: 'JS execution completed'                                                                           
  end 
  def y_button                                                                                                     
    `node ./app/javascript/controllers/LEDS.js`
    render plain: 'JS execution completed'                                                                                                                                                    
  end
  def a_button
    `node ./app/javascript/controllers/DANCE.js`
    render plain: 'JS execution completed'
  end
  def b_button
    `node ./app/javascript/controllers/BEG.js`
    render plain: 'JS execution completed'
  end

end
