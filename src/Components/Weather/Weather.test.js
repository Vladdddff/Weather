import Weather from './Weather';
import { create } from "react-test-renderer";


describe("Weather component tests", () => {
    test("test changeCity", () => {
        const component = create(<Weather />);
        const instance = component.getInstance();
        instance.changeCity('test');
        const data = instance.state.city;
        expect(data).toBe('test');
    });

    test("test setChange", () => {
        const component = create(<Weather />);
        const instance = component.getInstance();
        instance.setChange(true);
        const data = instance.state.isChange;
        expect(data).toBe(true);
    })

    test("test changePeriod", () => {
        const component = create(<Weather />);
        const instance = component.getInstance();
        instance.changePeriod('test');
        const data = instance.state.period;
        expect(data).toBe('test');
    });

    test("test changeRegion", () => {
        const component = create(<Weather />);
        const instance = component.getInstance();
        instance.changeRegion('test');
        const data = instance.state.region;
        expect(data).toBe('test');
    });
})
