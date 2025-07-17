import { useEffect, useState } from "react"

export const CustomerForm=()=>{
    interface nameInterface{
        "common":string,
        "official":string,
        "nativeName":{
            "spa":{
                "official":string,
                "common":string
            }
        }
    }
    interface iddInterface{
        "root":string,
        "suffixes":string[]
    }
    interface countryInterface{
        "name":nameInterface,
        "cca2":string,
        "idd":iddInterface
    }

    interface detailsInterface{
        [code:string]:string
    }

    const [mobCode,setMobCode]=useState<detailsInterface>({});
    const [countriesNames,setCountriesNames]=useState<detailsInterface>({});
    const [countrySelected,setCountrySelected]=useState<string>('');
    useEffect(()=>{
        const dataFetch=async ()=>{
           try {

            const response=await fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2")
            const data=await response.json();
            let codeMap:detailsInterface={};
            let countryMap:detailsInterface={};
            data.forEach((country:countryInterface)=>{
                codeMap[country.cca2]=(country.idd.root+country.idd.suffixes[0]);
                countryMap[country.cca2]=country.name.common;
            })
            setCountriesNames(countryMap)
            setMobCode(codeMap);
            
           } catch (error) {
            console.log("error : ", error);
            
           }
            
        }
        dataFetch();
    },[])


    return (
        <div className="w-1/2 overflow-y-scroll bg-[#fff2e3] p-18 py-10">
            <div className="text-center underline font-semibold text-md maroon">Your Details</div>
            <label htmlFor="customerFirstName">First Name<span className="text-red-500 font-thin">*</span></label>
            <input type="text" id="customerFirstName" placeholder="Please Enter First Name" required/>

            <label htmlFor="customerLastName">Last Name<span className="text-red-500 font-thin">*</span></label>
            <input type="text" id="customerLastName" placeholder="Please Enter Last Name" required/>

            <label htmlFor="customerEmail">Email<span className="text-red-500 font-thin">*</span></label>
            <input type="email" name="customerEmail" id="customerEmail" placeholder="Please Enter Email" required/>

            <label htmlFor="customerMobile">Mobile Number<span className="text-red-500 font-thin">*</span></label>
            
            <div id="customerMobile"   className="flex">
                <select name="" id="countryCode" className="mob" required>
                    {
                        Object.entries(mobCode).map(([key,value])=>(
                        (value!=='undefined')&&<option key={key} value={key}>{value}</option>
                        )
                        )
                    }
                </select>
                <input type="tel" name="customerMobile" placeholder="Please Enter Mobile Number" required/>
            </div>

            <label htmlFor="customerAccountNumber">Account Number</label>
            <input type="text" name="customerAccountNumber" id="customerAccountNumber" placeholder="Please Enter Account Number"/>

            
            <div className="text-center underline font-semibold text-md maroon m-2 mt-10">Details of the person you wish to refer</div>
            <label htmlFor="personFirstName">First Name<span className="text-red-500 font-thin">*</span></label>
            <input type="text" id="personFirstName" placeholder="Please Enter First Name" required/>

            <label htmlFor="personLastName">Last Name</label>
            <input type="text" id="personLastName" placeholder="Please Enter Last Name" required/>

            <label htmlFor="personCountry">Country<span className="text-red-500 font-thin">*</span></label>
            <select onChange={(event)=>{setCountrySelected(event.target.value)}} name="" id="personCountry" className="p-4" required>
                <option value="">select country</option>
                {
                    Object.entries(countriesNames).map(([key,value])=>(
                        (value!=='undefined')&&<option key={key} value={key}>{value}</option>
                    ))
                }
            </select>

            <label htmlFor="personMobile">Mobile Number<span className="text-red-500 font-thin">*</span></label>
            <div id="personMobile" className="flex">
                <select name="" id="countryCode" className="w-8 mob" required>
                    <option value={countrySelected}>{mobCode[countrySelected]}</option>
                </select>
                <input type="tel" name="personMobile" placeholder="Please Enter Mobile Number" required/>
            </div>

            <label htmlFor="personEmail">Email<span className="text-red-500 font-thin">*</span></label>
            <input type="email" name="personEmail" id="personEmail" placeholder="Please Enter Email" required/>

            <label htmlFor="preferredDate">Preferred Date</label>
            <input type="date" name="" id="preferredDate"/>

            <label htmlFor="preferredTime">Preferred Time</label>
            <select name="" id="preferredTime" className="w-full p-4">
                <option value="ist">Preferred Time in IST</option>
            </select>

            <div className="flex">
                <div>
                    <input type="radio" name="" id="consent" required/>
                </div>
                <div className="ml-2 text-sm">
                    <div>
                        By choosing to fill in the details of the person referred (“Referral”) here you authorize ICICI Bank to use, process or transfer the data as provided by you for the purposes of giving information to the Referral(s) regarding offers and promotions on products and services offered by ICICI Bank.
                    </div>
                    <div>
                        Additionally, I confirm that I have obtained the consent of the Referral(s) for sharing their data with ICICI Bank for the aforementioned Purpose.
                    </div>
                </div>
            </div>

            <button className="bg-[#f27b1a] mt-12 px-14 py-4 rounded-md text-white">Sumbit</button>
        </div>
    )
}