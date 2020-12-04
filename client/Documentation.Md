Deshbord
=======
In the home tab feel free to add anything you might like, so it can look better. Maybe shortcuts and information of the added flights would be good
-=>Shortcut buttons to add/edit flights, counter of flights to be completed or already completed,
=> add flight 
=>edit flight 
=>generate invoice 
=> profile

Add flight tab
=======================
    *we need only international and dominastic tab flight


        cmponent:
        ========
        *src(img1.png)
        international < buttn>
        donenstic <button>
        

        when clicking international flight:
        -----------------------------------------
        *src(img2)
        This is when clicking the international flights, remember to add the dropdown menu if origin or destination is national airport, and also for entry waypoint and exit waypoin ( i already sent you the csv with the dropdowns
        
        =>FORM FILED
            +DATE&TIME, //MENDETORY FILLUP CREATING TIME
            +TAIL NUMBER, //MENDETORY FILLUP CREATING TIME
            +OPERATOR, 
            +ICAO, 
            +AIRCRAFT TYPE, 
            +CALLSIGN, 
            +ORIGIN,
            +DESTINATION, 
            +ENTRY WAYPOINT 
            +EXIT WAYPOINT  //(this all are  form field)    




        when clicking dominestic flight:
        --------------------------------------
            *src(img3.png)
        This appears when clicking the domestic button. It does not have the entry waypoint or exit waypoiint, since it is a national flight. Remember also to add the origin and destination dropdowns.
        Form filed :
        
            +DATE&TIME, //MENDETORY FILLUP CREATING TIME
            +TAIL NUMBER, //MENDETORY FILLUP CREATING TIME
            +OPERATOR, 
            +ICAO, 
            +AIRCRAFT TYPE, 
            +CALLSIGN, 
            +ORIGIN,
            +DESTINATION, 

-Dropdown menu for the ENTRY and EXIT WAYPOINT box of the International add flights form
-Dropdown menu for the ORIGIN and DESTINATION only for domestic flights

        note:after adding route will go to edit tab
        =====

Edit flight tab :
==================
    *src(img4.png)
    -Show if the added flights are completed or uncompleted (in the edit flights tab)

    -Add a search box for finding flights with the REGISTRATION code
This one is the edit flights tab. When an international or national flight is added, it goes into this tab. You can see a list of flights added (Tail number and near the date), as you have read on the requ document, you should add another parameter to say whether the flight data is completed or uncompleted (as we need to know if it is completed or uncompleted in order to fulfilled it). It would be ideal if we create two separate parts, one for Complete routes and another for uncomplete routes.

    *src(img5.png)
When clicking into one of the flights that appear there, you will see the next, edit or remove. You will be able to edit the flight or to remove it.
 
 If you click edit it will show all the data filled, and you will be able to finally complete it
    src(img6.png)
Remember there are two types of flights internarional and domestix

Then if you click remove, it will appear the following
    src(img7.png)
The data is completed if all parts of the form are filled.


Another feature to add here is to know whether the flight is completed or uncompleted. The
completed flight has all the boxes of the form filled, the uncompleted flights do not have all the
boxes of the form filled. In the same Edit flights tab, where all the added flights appear, apart
from appearing the REGISTRATION and the DATE, it should appear something that says whether
the flight is completed or uncompleted. In this part a search box is necessary to filter flights and
search using the REGISTRATION code of the aircraft, so it will be easy to search for the flights.

Envoice generator
======================
    *src(img8)
Then you will see the invoice generator tab. Just start date, end date and the operator (here you will have to add the dropdown menu with the airlines I sent you in the csv)


Flight analytics
================
this will be a blank page

Login page 
=============
The login tab, you should create a good looking user / password front end

user profile
=============
add all about user  profile 
