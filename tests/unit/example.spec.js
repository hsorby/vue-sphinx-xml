import { shallowMount } from "@vue/test-utils";
import HelloWorld from "../../src/components/HelloWorld.vue"; // This doesn't exist ... 

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
