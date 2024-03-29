12/09 
----------------
progress:
- reinstalled npm due to v6 bug
- implemented bootstrap
- created main container, home component, navbar component, cars homepage component
- homepage: worked on UI (navbar setup, carousel, section)
- added Google Font Josefin Sans script to index.html (used for Navbar font)

// pending //
- homepage: add magnifying glass search icon in navbar
- homepage: add signup / login nav links 
- homepage: add the carousel caption
- homepage: put together the homepage section info 


12/15 
------------------
progress:
- homepage: added magnifying glass search icon in navbar
- homepage: added signup / login nav links 
- homepage: put together both homepage sections. 
- homepage: added the carousel caption 

// pending //
- fix navbar to the top of page when scrolling 


12/28
------------------
progress: 
- homepage: couldn't fix navbar issue on sticky-top settings, so I just set it back to fixed-top for the time being
- homepage: footer
- cars page: carousel image

// pending //
- cars page: search box and search category styling
- cars page: fetch babckend data to display all cars (or hard code it for the time being)

12/29 
------------------
progress:
- cars page: cards layout and styling, section border coloring
- parts page: carousel setup, card layout and styling, section border coloring
- implemented footer component in main container

// pending //
- cars & parts page: search box and search category styling

12/30
------------------
progress:
- updated site brand logo
- implemented about page with message from the owner
- additional /about route to main container switch router


// pending //
- about page: navbar font visibility issue

2/05
-------------------
progress:
- added google oauth to user login 
- login, logout components for oauth implemented

//pending//
- signup page 
- regular login form needs to be done
- navbar situation needs to be looked at
- home page section area responsiveness needs to be adjusted into flexbox instead of whatever concoction I did
- fix navbar hamburger icon to have content in the dropdown
- have an /about link somewhere on the site
- setup backend api to start populating content

2/07
--------------------
progress: 
- populated cars data from the api
- setup react/redux/thunk flow
- got rid of some minor html errors
- moved car related information from the MainContainer to CarListingContainer

//pending//
* same as before * 
- "/cars/:car_id" path needs to be set in place
- changes need to be addressed in the backend regarding making cars & parts separate objects. 

2/9 - 2/11
-------------------
progress: 
* addressed all prior concerns * 
- implemented signup and login authentication (store, actions, reducers, components, etc)
- removed google oauth (will add later down the line)

//pending//
- navbar needs to inherit current user's name from props
- user only paths need to be implemented
- /selling page needs to be implemented (crud functionality)
- "/cars/:car_id" path needs to be set in place
- try filtering through car/parts listings