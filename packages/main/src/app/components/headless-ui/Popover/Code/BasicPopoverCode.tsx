import CodeModal from '@/app/components/ui-components/CodeModal'
import React from 'react'

const BasicPopoverCode = () => {
  return (
    <div>
      <CodeModal>
        {`
    import React from "react";
    import { PopoverButton, PopoverPanel, Popover } from "@headlessui/react";    
     
    <div className="flex w-full">
          <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full">
            <div className="text-sm font-semibold text-ld">
              Products
            </div>
            <Popover>
              <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
                Solutions
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted"
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Insights</p>
                    <p className="text-bodytext text-sm">
                      Measure actions your users take
                    </p>
                  </a>
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Automations</p>
                    <p className="text-bodytext text-sm">
                      Create your own targeted content
                    </p>
                  </a>
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Reports</p>
                    <p className="text-bodytext text-sm">Keep track of your growth</p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Documentation</p>
                    <p className="text-bodytext text-sm">
                      Start integrating products and tools
                    </p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <div className="text-sm font-semibold text-ld">Pricing</div>
        </div>
        `}
      </CodeModal>
    </div>
  )
}

export default BasicPopoverCode
