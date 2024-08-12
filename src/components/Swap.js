import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";
import { Web3ModalProvider } from "./Web3Modal/Web3ModalProvider";

const Swap = () => {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div class="flex flex-col w-1/4 mx-auto">
        <div class="flex flex-col rounded-lg h-22 bg-slate-50 mb-3">
          <label class="flex justify-start ml-3 mt-3">Sell</label>
          <input
            type="number"
            id="sell-token"
            class="w-full ml-3 mt-3 h-12 max-w-60 text-4xl bg-transparent border-none outline-none focus:outline-none focus:ring-red-500 focus:border-2"
            placeholder="0"
          />
          <label class="flex justify-end mr-5 mb-3">Balance: 0</label>
        </div>
        <button
          type="button"
          class="flex flex-col w-12 h-12 justify-center m-auto border-4 border-white bg-slate-50 hover:bg-slate-200 hover:ring-2 focus:outline-none rounded-2xl items-center -mt-8 -mb-6 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
            />
          </svg>
        </button>
        <div class="flex flex-col rounded-lg h-22 bg-slate-50">
          <label class="flex justify-start ml-3 mt-3">Buy</label>
          <input
            type="number"
            id="buy-token"
            class="w-full ml-3 mt-3 h-12 max-w-60 text-4xl bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none"
            placeholder="0"
          />
          <label class="flex justify-end mr-5 mb-3">Balance: 0</label>
        </div>
        <button class="bg-pink-100 h-14 mt-3 py-1 px-4 text-xl font-bold rounded-xl text-fuchsia-500 hover:bg-pink-200">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Swap;
