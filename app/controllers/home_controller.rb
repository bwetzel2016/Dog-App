class HomeController < ApplicationController
  def index
  end


  def about
  end

  def x_button                                                                                                     
    system('timeout 30 node ./app/javascript/controllers/GO.js')                                                                           
  end 
  def y_button                                                                                                     
    system('timeout 1 node ./app/javascript/controllers/LEDS.js')                                                                                                                                                    
  end
  def a_button
    system('timeout 20 node ./app/javascript/controllers/DANCE.js')
    
  end
  def b_button
    system('timeout 10 node ./app/javascript/controllers/BEG.js')
  end
  def z_button
    system('timeout 5 node ./app/javascript/controllers/SSH.js')
  end

end
