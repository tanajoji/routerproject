// 1 describe for 1 unit test--> 2 params, descriptio, test code in a callback function
//multiple ITs in one describe
//cannot directly import the APP comonent since it is enclosed in browser router. we have to mock it with the exact environment
// browser router should not be used in test environment. instead in testing we use MEMORY ROUTER to mimic browser router
// TEST 1 : make sure app component has div with id APP and make sure it is there
// TEST 2 : nav bar is rendered
// 3 : renders navbar wth brand name and check the brand name value
// 4 : renders navlinks with correct names
// 5 : renders navlinks with correct paths
// 6 : login button has correct or edsired initial values
// 7,8,9 : routes or components are rendered - Home,About,Products. must ensure other components are not rendered along with checking each component being rendered
// 10 : to test product details component, call that route with a dummy id and name


//to exec : npm run test

import {mount} from "enzyme"
import { MemoryRouter } from "react-router-dom"
import App from "./App"
import About from "./components/About/About"
import Home from "./components/Home/Home"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import Products from "./components/Products/Products"

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

  it("Renders Navlinks with correct display Name", () => {      
    const navLink = wrapper.find("NavLink")                // DIRECTLY TARGETING NavLink tag . hence returned object will be an array of 3 elements
    expect(navLink.at(0).text()).toBe("Home")
    expect(navLink.at(1).text()).toBe("About")
    expect(navLink.at(2).text()).toBe("Products")                  
  })

  it("Renders Navlinks with correct path Name", () => {     //paths are passed as props to the navlink component by react. with the prop name "to" 
    const navLink = wrapper.find("NavLink")                
    expect(navLink.at(0).prop("to")).toBe("/")
    expect(navLink.at(1).prop("to")).toBe("/about")
    expect(navLink.at(2).prop("to")).toBe("/products")                  
  })

  it("Renders login button with correct initial values", () => {     //paths are passed as props to the navlink component by react. with the prop name "to" 
    const button = wrapper.find("Button")                
    expect(button.prop("isUserLoggedIn")).toBe(false)
    expect(typeof button.prop("handleLogin")).toBe("function") //typeof ... shud be function
    expect(button.prop("isLoading")).toBe(false)
    expect(button.prop("ifUserLoggedIn")).toBe("Logout")
    expect(button.prop("ifUserLoggedOut")).toBe("Login")
  })

  //check if routes or components are rendered correctly
  //for this the components have to be imported

  //home
  it("Renders home correctly", () => {     
    wrapper = component("/")                    //renders home component onto screen      
    expect(wrapper.find(Home)).toHaveLength(1)  //check if its rendered
    expect(wrapper.find(About)).toHaveLength(0) // makes sure other components are not rendered at this point
    expect(wrapper.find(Products)).toHaveLength(0)
    expect(wrapper.find(ProductDetails)).toHaveLength(0)
  })

  //About
  it("Renders About correctly", () => {     
    wrapper = component("/about")                        
    expect(wrapper.find(Home)).toHaveLength(0)  
    expect(wrapper.find(About)).toHaveLength(1)
    expect(wrapper.find(Products)).toHaveLength(0)
    expect(wrapper.find(ProductDetails)).toHaveLength(0)
  })

  //Products
  it("Renders Products correctly", () => {     
    wrapper = component("/products")                       
    expect(wrapper.find(Home)).toHaveLength(0)  
    expect(wrapper.find(About)).toHaveLength(0)
    expect(wrapper.find(Products)).toHaveLength(1)
    expect(wrapper.find(ProductDetails)).toHaveLength(0)
  })

  //Product Details
  it("Renders Product Details correctly", () => {     
    wrapper = component("/products/1/hoodie")                      
    expect(wrapper.find(Home)).toHaveLength(0)  
    expect(wrapper.find(About)).toHaveLength(0)
    expect(wrapper.find(Products)).toHaveLength(0)
    expect(wrapper.find(ProductDetails)).toHaveLength(1)
  })

  it("Renders Product with correct initial values for properties", () => {     //paths are passed as props to the product component by react
    wrapper = component("/products")     

    expect(wrapper.find(Products)).toHaveLength(1)
    expect(wrapper.find(Products).prop("isLoading")).toBe(false)
    expect(wrapper.find(Products).prop("isUserLoggedIn")).toBe(false)
  })
})