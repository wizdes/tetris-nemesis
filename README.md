Tetris Nemesis

#To dos:
1) Create a "delete" call to the server to remove from the server cache
2) Call the 'delete' call when:
  a) closing a tab
  b) winning the game
3) Adding a "win" screen

#Large changes:
-Refactor the code (Will most likely require a design spec, as this will require ~thought)
1) Draw a state diagram

##Add multiple game modes
a) "challenge" where, completing a line will send a line to the opponent
b) "time challenge", where you have 2 minutes to get more lines than the other
c) "personal challenge", get the best personal challenge
d) need to add buttons to get into the different states

##Add perspective for the multi button support
- http://desandro.github.io/3dtransforms/examples/carousel-02-dynamic.html

##Unit tests? May need invariants for the different states

#How to deploy:

Current mechanism:
Visual Studio 2013 'Deploy' to azurewebsites.net

This will require an Azure subscription.
