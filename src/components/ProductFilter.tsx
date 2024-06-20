import { Accordion, AccordionItem, Checkbox, CheckboxGroup, Slider } from "@nextui-org/react";

export default function ProductFilter() {
    return (
        <div className="w-full  max-w-xs">
            <div className="rounded-medium p-6 bg-default-50">
                <h2 className="text-large font-medium text-foreground">Filter by</h2>
                <hr className="shrink-0 border-none w-full h-divider my-3 bg-default-100" role="separator"></hr>
                <div className="flex flex-col gap-6">
                    <Slider
                        label="Price Range"
                        step={50}
                        minValue={0}
                        maxValue={1000}
                        defaultValue={[100, 500]}
                        formatOptions={{ style: "currency", currency: "USD" }}
                        className="font-medium max-w-md"
                    />
                    <Accordion defaultExpandedKeys={["2", "3"]} isCompact showDivider={false} selectionMode="multiple">
                        <AccordionItem key="1" className="text-default-600 font-medium text-medium" aria-label="Category" title="Category">
                            <CheckboxGroup className="font-normal"
                                defaultValue={["buenos-aires", "london"]}
                            >
                                <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                                <Checkbox value="sydney">Sydney</Checkbox>
                                <Checkbox value="san-francisco">San Francisco</Checkbox>
                                <Checkbox value="london">London</Checkbox>
                                <Checkbox value="tokyo">Tokyo</Checkbox>
                            </CheckboxGroup>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Gender" title="Gender">
                            <CheckboxGroup className="font-normal"
                            >
                                <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                                <Checkbox value="sydney">Sydney</Checkbox>
                                <Checkbox value="san-francisco">San Francisco</Checkbox>
                                <Checkbox value="london">London</Checkbox>
                                <Checkbox value="tokyo">Tokyo</Checkbox>
                            </CheckboxGroup>
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Brand" title="Brand">
                            <CheckboxGroup className="font-normal"
                            >
                                <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                                <Checkbox value="sydney">Sydney</Checkbox>
                                <Checkbox value="san-francisco">San Francisco</Checkbox>
                                <Checkbox value="london">London</Checkbox>
                                <Checkbox value="tokyo">Tokyo</Checkbox>
                            </CheckboxGroup>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>

    );
}
