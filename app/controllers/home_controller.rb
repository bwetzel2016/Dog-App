class HomeController < ApplicationController
  def index
  end


  def about
  end
  # Go mode
  def x_button                                                                                                     
    system('timeout 30 node ./app/javascript/controllers/X_button.js')                                                                           
  end
  # LED mode
  def y_button                                                                                                     
    system('timeout 3 node ./app/javascript/controllers/Y_button.js')                                                                                                                                                    
  end
  # Dance mode
  def a_button
    system('timeout 20 node ./app/javascript/controllers/A_button.js') 
  end
  # Beg mode
  def b_button
    system('timeout 10 node ./app/javascript/controllers/B_button.js')
  end
  # launch and cancel button
  # SSH mode
  def z_button
    system('timeout 5 node ./app/javascript/controllers/Z_button.js')
  end
  # cancel button
  def c_button
    system('timeout 5 node ./app/javascript/controllers/C_button.js')
  end
  
  #look up button
  def u_button
    system('timeout 10 node ./app/javascript/controllers/UP.js')
  end
  #look down button
  def d_button
    system('timeout 5 node ./app/javascript/controllers/DOWN.js')
  end
  #twist left button
  def l_button
    system('timeout 5 node ./app/javascript/controllers/LEFT.js')
  end
  #twist right button
  def r_button
    system('timeout 5 node ./app/javascript/controllers/RIGHT.js')
  end
end
