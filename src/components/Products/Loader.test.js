//test loader by passing different properties

import { mount } from "enzyme";
import Loader from "./Loader";

const component = (prop) => {
    return mount(<Loader {...prop}/>)
}

describe("Loader Component", () => {
    let wrapper = null

    beforeEach(() => {
        wrapper = component()
    })

    it("is rendered",() => {
        const loader = wrapper.find(".loader")
        expect(loader.length).toBe(1)
    })

    it("is rendered for Products",() => {
        wrapper = component({ component:"Products"})
        const loader = wrapper.find(".loader")
        expect(loader.hasClass("loader_Products")).toBe(true) // to check this class is present and below one is not when prop passed is Products
        expect(loader.hasClass("loader_Login")).toBe(false)
    })

    it("is rendered for login",() => {
        wrapper = component({ component:"Login"})
        const loader = wrapper.find(".loader")
        expect(loader.hasClass("loader_Products")).toBe(false) 
        expect(loader.hasClass("loader_Login")).toBe(true)
    })

})