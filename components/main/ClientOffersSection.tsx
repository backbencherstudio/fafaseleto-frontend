import SectionHeading from "../reuseable/SectionHeading";

function ClientOffersSection() {
  return (
    <section className="">
      <SectionHeading className="mb-10">
        Our Clients Received Such Offers, What about you?
      </SectionHeading>

     

      <div className="relative border">
         {/* left side layer*/}
      <div className="w-[365px] h-[372px] [background:linear-gradient(270deg,rgba(250,250,250,0.89)_43.79%,rgba(250,250,250,0.00)_82.52%)] rounded-lg border absolute top-0 left-0"></div>

{/* right side layer*/}
<div className="w-[365px] h-[372px] [background:linear-gradient(270deg,rgba(250,250,250,0.89)_43.79%,rgba(250,250,250,0.00)_82.52%)] rounded-lg border absolute top-0 right-0"></div>
        <div className="grid grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="w-[305px] h-[319px] [background:#FAFAFA] shadow-[0_2px_30px_1px_rgba(0,0,0,0.07)] rounded-lg p-4 flex flex-col gap-10 border">
              <img src="/images/client1.png" alt="client offer" />

              <div className="w-[262px] h-[228px] [background:rgba(0,0,0,0.01)] backdrop-blur-[0.5px] rounded-[8px_8px_0_0] relative border">
                <div className="absolute top-[9px] left-[17px] inline-flex justify-center items-center gap-[7.901px] [background:#10B981] px-[12.642px] py-[6.321px] rounded-[5px] text-[color:var(--2,#FAFAFA)] text-center font-secondary text-[12.642px] font-bold leading-[normal]">
                  94/100
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientOffersSection;
