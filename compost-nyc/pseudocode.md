## Navbar Component - stateless

### Route my 3 page components without re-rendering with each click on same page
### Use 'exact' to prevent multiple pages loading  
### Add 'Navlink' styling to highlight a active link when clicked
### USe switch to cycle through each page path
### No homepage ('./') assigned, so this turned out to be redundant, but it was meant for a login page which I decided not to implement due to its complexity.

## Location Component - stateful

### Passed in logic from based on the text typed from the user
### Initial state of the component class is null
### The async calls the api url, and returns an array of objects. Could not figure out the syntax for calling a specific object from the array of the api I used.
### Used a hard-coded index of [3] to be able to render an example site when the location link is clicked.

## Search Component - stateful

### The api url is assigned to a constant to be called with the JSX query expression from the text typed in by the user in the search bar.
### The setState is supposed to then return the matching object in a <p> element.
### Since I was not able to render the api results in this component, I used the Borough component to render a hard-coded result.

## Borough Component - stateful

### State is empty, and should change setState to an matching object from the api array objects. Used a hardcoded index to render a result instead.

## Zip Component - stateful
### Makes a call to the api and renders a zip code element matching the query.
### Like the borough component, since I could not render the api properly, I hardcoded a search result instead.

## About Component - stateless
### A component that renders a div containing text.
### Its contents are routed to the Navbar component.



