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
  # this has not been tested or implemented yet
  def u_button
    system('timeout 5 node ./app/javascript/controllers/UP.js')
  end
  def d_button
    system('timeout 5 node ./app/javascript/controllers/DOWN.js')
  end
  def l_button
    system('timeout 5 node ./app/javascript/controllers/LEFT.js')
  end
  def r_button
    system('timeout 5 node ./app/javascript/controllers/RIGHT.js')
  end
end
