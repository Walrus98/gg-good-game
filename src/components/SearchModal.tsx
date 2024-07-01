import { Modal, ModalContent, ModalBody, Button, useDisclosure, Kbd } from "@nextui-org/react";
import { SearchIcon } from "./icons";

export default function SearchModal() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button variant="light" isIconOnly aria-label="search" onPress={onOpen}>
        <SearchIcon className="text-default-500" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          <ModalBody>
            <div className="flex items-center w-full px-4 border-b border-default-400/50 dark:border-default-100">
              <SearchIcon />
              <input
                className="w-full px-2 h-14 font-sans text-lg outline-none rounded-none bg-transparent text-default-700 placeholder-default-500 dark:text-default-500 dark:placeholder:text-default-300"
                placeholder="Search documentation"
                cmdk-input=""
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                aria-autocomplete="list"
                role="combobox"
                aria-expanded="true"
                aria-controls=":r9r0:"
                aria-labelledby=":r9r1:"
                id=":r9r2:"
                type="text"
                value=""
                aria-activedescendant=":r9r5:">
              </input>
              <Kbd>ESC</Kbd>
            </div>
            <div className="px-4 mt-2 pb-4 overflow-y-auto max-h-[50vh]">
              <div cmdk-list-sizer>
                <div cmdk-group="" role="presentation" data-value="recent">
                  <div cmdk-group-heading="" aria-hidden="true" id=":r9r4:">
                    <div className="flex items-center justify-between">
                      <p className="text-default-600">Recent
                      </p>
                    </div>
                  </div>
                  <div cmdk-group-items="" role="group" aria-labelledby=":r9r4:">
                    <div className="px-4 mt-2 group flex h-16 justify-between items-center rounded-lg shadow bg-content2/50 active:opacity-70 cursor-pointer transition-opacity data-[active=true]:bg-primary data-[active=true]:text-primary-foreground" data-active="true" id=":r9r5:" cmdk-item="" role="option" data-value="blurred footer" aria-selected="true" data-selected="true">
                      <div className="flex gap-3 items-center w-full max-w-full"><svg aria-hidden="true" fill="none" focusable="false" height="20" role="presentation" viewBox="0 0 24 24" width="20" className="text-default-500 dark:text-default-300 group-data-[active=true]:text-primary-foreground">
                        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        </path>
                        <path d="M22 22L20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        </path>
                      </svg>
                        <div className="flex flex-col gap-0 justify-center max-w-[80%]">
                          <span className="text-default-400 text-xs group-data-[active=true]:text-primary-foreground select-none">Card
                          </span>
                          <p className="truncate text-default-500 group-data-[active=true]:text-primary-foreground select-none">Blurred Footer</p>
                        </div>
                      </div>
                      <svg aria-hidden="true" fill="none" focusable="false" height="14" role="presentation" viewBox="0 0 24 24" width="14">
                        <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
