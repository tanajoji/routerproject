// 1 describe for 1 unit test--> 2 params, descriptio, test code in a callback function
//multiple ITs in one describe
//cannot directly import the APP comonent since it is enclosed in browser router. we have to mock it with the exact environment
// browser router should not be used in test environment. instead in testing we use MEMORY ROUTER to mimic browser router
// TEST 1 : make sure app component has div with id APP and make sure it is there
// TEST 2 : nav bar is rendered
// 3 : renders navbar wth brand name
// 

//to exec npm run test

import {mount} from "enzyme"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

describe('App component', () => { 
 
  let wrapper = null //will have mock of APP component later

  //app will render the path specified below
  const component = (path) => { 
    // return can be done 2 ways -- shallow rendering(sub components will be omited, only placeholders of specified component will be mocked), mount rendering
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <App/> 
      </MemoryRouter>
    )                   

  }

  beforeEach(() => {            // written once, fetching app to wrapper , other than doin it in every IT 
    wrapper = component();      // if path to passed, es6 will take home path by default
    
  })
  it("is Rendered", () => {      //if app component
    const app = wrapper.find({ "data-testid" : "App"})  //wrapper reurns an array of items with "data-testid" : "App"
    expect(app.length).toBe(1)                          // ensures that there is only 1 app component rendered
  })

  it("Renders Navbar", () => {      
    const navbar = wrapper.find({ "data-testid" : "Nav"})  
    expect(navbar.length).toBe(1)                          
  })

  it("Renders Navbar with BrandName", () => {      
    const h1 = wrapper.find({ "data-testid" : "Brand"})  
    expect(h1.length).toBe(1)  
    expect(h1.text()).toBe("The Clothing Company")                        
  })

})