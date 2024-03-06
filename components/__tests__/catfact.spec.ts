import { describe, it, expect } from "vitest";
import Main from "../Main.vue";
import { mount } from "@vue/test-utils";

describe("Cat Fact", () => {
  const wrapper = mount(Main);
  it("Should render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
