import React, { useState } from "react";
import Cities from "./Cities";

function Surgery() {
  const links = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791675/Varicose-vein_mvvbd6.webp",
      name: "Varicose Veins",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791675/turp_zotgee.webp",
      name: "TURP",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791674/Total_Knee_Replacement_vh224i.png",
      name: "Knee Replacement",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791674/Sebaceous-Cyst_xsf8dp.webp",
      name: "Sebaceous cyst",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791674/Pilonidal_sinus_c9c8k7.webp",
      name: "Pilonidal Sinus",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791674/Lasik_ujpegr.webp",
      name: "Lasik",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791674/Lipoma-removal_niwvcu.webp",
      name: "Lipoma Removal",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791674/Piles_sbakfl.webp",
      name: "Piles",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791673/Cataract_20_1__qutvnl.webp",
      name: "Cataract",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791673/Gall-stones_1_hnjdnv.webp",
      name: "Gallstone",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791673/Hair_transplant_ibjypy.png",
      name: "Hair Transplant",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791673/Hernia_rg3t11.webp",
      name: "Hernia",
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791673/Hydrocele_ias5ne.webp",
      name: "Hydrocele",
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791674/IVF_v2hhvc.png",
      name: "IVF",
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791674/Kidney_stone_dkthfy.webp",
      name: "Kidney Stone",
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671792727/Anal_Fistulaa_v1lf1g.webp",
      name: "Anal Fistula",
    },
    {
      id: 17,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791673/Breast_Removal_-_Mastectomy_xp4kmm.webp",
      name: "Gynaecomastia",
    },
    {
      id: 18,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791673/Breast-Lump_dflbum.webp",
      name: "Lump in Breast",
    },
    {
      id: 19,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791673/Anal_Fistulaa_ymhcmm.webp",
      name: "Anal Fissure",
    },
    {
      id: 20,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671791673/Circumcision_1_jpdifp.webp",
      name: "Circumcision",
    },
  ];
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flex flex-col max-w-3xl ml-28 mt-2">
      <div>
        <h2 className="text-black font-bold text-xl">
          We are experts in Surgical solutions for 50+ ailments.
        </h2>
      </div>
      <div className="mt-4 px-6 py-3 border-2 border-slate-200 rounded-xl ">
        <p className="text-black font-bold text-lg">Popular Surgeries</p>
        <div className="grid grid-cols-5 ">
          {links.map(({ id, src, name }) => (
            <div
              key={id}
              className="flex flex-col mt-8 items-center justify-center "
            >
              <button
                className="hover:scale-110 duration-150 cursor-pointer focus:scale-95 transition ease-in"
                type="button"
                onClick={() => setShowModal(true)}
              >
                <img src={src} alt="Disease" width={60} height={60} />
              </button>

              <p className="py-1">{name}</p>
            </div>
          ))}
          {showModal ? (
            <>
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-700 bg-opacity-70">
                <div className="relative w-auto my-2 mx-auto max-w-sm">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-3">
                      <h3 className="text-xl font-semibold">
                        Book an appointment with our expert surgeon
                      </h3>
                      <button
                        className="bg-transparent border-0 text-black float-right hover:scale-110 transition ease-out"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-white opacity-7 ml-2 h-7 w-7 text-lg block bg-yellow-500 py-0  rounded-full">
                          x
                        </span>
                      </button>
                    </div>
                    <div className="relative flex-auto">
                      <form className="px-8 w-full">
                        <input
                          type="text"
                          className="shadow appearance-none border rounded-lg w-full h-14 py-2 px-1 text-black"
                          placeholder="Name*"
                        />
                        <input
                          type="number"
                          className=" mt-8 shadow appearance-none border rounded-lg h-14 w-full py-2 px-1 text-black"
                          placeholder="Contact Number*"
                        />
                        <input
                          type="number"
                          className=" mt-8 shadow appearance-none border rounded-lg h-14 w-full py-2 px-1 text-black"
                          placeholder="Age*"
                        />
                        <Cities />
                      </form>
                    </div>
                    <div className="flex items-center justify-center ">
                      <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:scale-105 transition ease-out outline-none focus:outline-none w-full mb-3 mt-[-20px] mx-4"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Surgery;
