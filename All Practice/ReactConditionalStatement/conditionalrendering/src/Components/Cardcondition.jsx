import React from "react";
import Men from "./Men";
import Women from "./Women";

function Cardcondition() {
  const user = prompt("Search Category");
  const users = user.toLocaleLowerCase();
  // const users ="women"
  if (users === "men") {
    return (
      <>
        <h1 className="bg-body-tertiary bg-info-subtle text-center border-1 rounded-5">
          <i className="text-dark">Men's Wear</i>
        </h1>

        <div className=" my-4 container">
          <div className="row gap-2">
            <Men
              imgSrc="s1.webp"
              title={"Men Regular Fit Solid Spread Collar Casual Shirt"}
              price={"₹329"}
              ofrPrice={"₹1999"}
              discount={"83% off"}
              buyLink={
                "https://www.flipkart.com/global-nomad-men-solid-casual-white-shirt/p/itma2c78668c350d?pid=SHTGZ3H2AE8GWXGG&lid=LSTSHTGZ3H2AE8GWXGG4BSLCT&marketplace=FLIPKART&q=mens+shirt&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=s_1_7&otracker=AS_QueryStore_OrganicAutoSuggest_2_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_3_na_na_na&fm=search-autosuggest&iid=en_PS1rNV5C2UO9DuRVf63LJKLxXOcFzAYKsE50z3zQ2NeyFkC9YqUC9GuctYpYLyqqpTO4hLOTbfg8Nw8sSuVMcA%3D%3D&ppt=sp&ppn=sp&ssid=g5sg607d1c0000001721913767180&qH=f54e8377fb97ec5d"
              }
            ></Men>

            <Men
              imgSrc="s2.webp"
              title={"Men Slim Fit Printed Cut Away Collar Casual Shirt"}
              price={"₹503"}
              ofrPrice={"₹1199"}
              discount={"58% off"}
              buyLink={
                "https://www.flipkart.com/highlander-men-printed-casual-light-green-shirt/p/itm184fcd4079dda?pid=SHTG7KCG7CDSFFYG&lid=LSTSHTG7KCG7CDSFFYGTGIMCL&marketplace=FLIPKART&q=mens+shirt&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=s_1_6&otracker=AS_QueryStore_OrganicAutoSuggest_2_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_3_na_na_na&fm=search-autosuggest&iid=70f543fd-9feb-41ca-afe3-14acaf1565b8.SHTG7KCG7CDSFFYG.SEARCH&ppt=sp&ppn=sp&qH=f54e8377fb97ec5d"
              }
            ></Men>

            <Men
              imgSrc="s3.webp"
              title={"Men Regular Fit Printed Spread Collar Casual Shirt"}
              price={"₹799"}
              ofrPrice={"₹1999"}
              discount={"60% off"}
              buyLink={
                "https://www.flipkart.com/freakins-men-printed-casual-green-white-shirt/p/itmce4c02cdd6967?pid=SHTH2HFZ5YGQ9EHZ&lid=LSTSHTH2HFZ5YGQ9EHZXAXXGP&marketplace=FLIPKART&q=mens+shirt&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=s_1_20&otracker=AS_QueryStore_OrganicAutoSuggest_2_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_3_na_na_na&fm=search-autosuggest&iid=70f543fd-9feb-41ca-afe3-14acaf1565b8.SHTH2HFZ5YGQ9EHZ.SEARCH&ppt=sp&ppn=sp&qH=f54e8377fb97ec5d"
              }
            ></Men>

            <Men
              imgSrc="s4.webp"
              title={"Men Slim Fit Checkered Cut Away Collar Casual Shirt"}
              price={"₹419"}
              ofrPrice={"₹999"}
              discount={"58% off"}
              buyLink={
                "https://www.flipkart.com/ketch-men-checkered-casual-multicolor-shirt/p/itmb32b0b401aca1?pid=SHTGC9ACYCTFAH3C&lid=LSTSHTGC9ACYCTFAH3CEUSJEJ&marketplace=FLIPKART&q=mens+shirt&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=s_1_34&otracker=AS_QueryStore_OrganicAutoSuggest_2_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_3_na_na_na&fm=search-autosuggest&iid=70f543fd-9feb-41ca-afe3-14acaf1565b8.SHTGC9ACYCTFAH3C.SEARCH&ppt=sp&ppn=sp&qH=f54e8377fb97ec5d"
              }
            ></Men>

            <Men
              imgSrc="so.webp"
              title={"ARIZONA-N Running Shoes For Men"}
              price={"₹779"}
              ofrPrice={"₹1119"}
              discount={"30% off"}
              buyLink={
                "https://www.flipkart.com/abros-arizona-n-running-shoes-men/p/itma55de8d3f0f93?pid=SHOGC2M9JEUFQXEW&lid=LSTSHOGC2M9JEUFQXEW6N2RYP&marketplace=FLIPKART&q=mens+shoes&store=osp%2Fcil&srno=s_1_11&otracker=search&otracker1=search&fm=Search&iid=en_HrUKyJM5uaNAsKifQLbgpsF-EX6bWwr_TMGuZtQJCM8JK1aZz1I4VnXT_CX2KLLFpO9GaalJRHzv5_lVtJ78lK8iqbiwhGf4dwbXVx7ZSks%3D&ppt=sp&ppn=sp&ssid=umveapjyzk0000001721916763596&qH=87bedf42cd1414e7"
              }
            ></Men>

            <Men
              imgSrc="so2.webp"
              title={"AVENUE-ON Running Shoes For Men"}
              price={"₹1,409"}
              ofrPrice={"₹2,999"}
              discount={"53% off"}
              buyLink={
                "https://www.flipkart.com/abros-avenue-on-running-shoes-men/p/itm7b7b9e28e3b75?pid=SHOGZV4VPKHKH3HN&lid=LSTSHOGZV4VPKHKH3HN55Y1GY&marketplace=FLIPKART&q=mens+shoes&store=osp%2Fcil&srno=s_1_17&otracker=search&otracker1=search&fm=Search&iid=en_HrUKyJM5uaNAsKifQLbgpsF-EX6bWwr_TMGuZtQJCM8INttiuuJ7bB8P-vxpB1CFBC_00QA-NTNsisZO8fmYWfcUmN_6PwCReg_VTM4VLxo%3D&ppt=sp&ppn=sp&qH=87bedf42cd1414e7"
              }
            ></Men>

            <Men
              imgSrc="so3.webp"
              title={"PASSION-ON Running Shoes For Men"}
              price={"₹845"}
              ofrPrice={"₹1,399"}
              discount={"39% off"}
              buyLink={
                "https://www.flipkart.com/abros-passion-on-running-shoes-men/p/itmd8425469e9c36?pid=SHOGZV4VDHGESCJK&lid=LSTSHOGZV4VDHGESCJKE0HKGK&marketplace=FLIPKART&q=mens+shoes&store=osp%2Fcil&srno=s_1_21&otracker=search&otracker1=search&fm=Search&iid=en_HrUKyJM5uaNAsKifQLbgpsF-EX6bWwr_TMGuZtQJCM8_a2GOO3bNCJ9Ac4qL4yIO9BqHmCSBEdgVBaaEYum-fIE8waCTrWcncKeK_ydPfoM%3D&ppt=sp&ppn=sp&qH=87bedf42cd1414e7"
              }
            ></Men>

            <Men
              imgSrc="so4.webp"
              title={"CyberRun M Running Shoes For Men"}
              price={"₹1,978"}
              ofrPrice={"₹4,299"}
              discount={"53% off"}
              buyLink={
                "https://www.flipkart.com/adidas-cyberrun-m-running-shoes-men/p/itm3db9f907d0244?pid=SHOGGW46V7AM8UU3&lid=LSTSHOGGW46V7AM8UU3IPPGEO&marketplace=FLIPKART&q=mens+shoes&store=osp%2Fcil&spotlightTagId=FkPickId_osp%2Fcil&srno=s_1_33&otracker=search&otracker1=search&fm=Search&iid=aa868083-d571-40b3-b121-bf33af750ad4.SHOGGW46V7AM8UU3.SEARCH&ppt=sp&ppn=sp&qH=87bedf42cd1414e7"
              }
            ></Men>
          </div>
        </div>
      </>
    );
  } else if (users === "women") {
    return (
      <>
        <h1 className="bg-body-tertiary bg-danger-subtle text-center border-1 rounded-5 ">
          <i className="text-dark">Women's Wear</i>
        </h1>
        <div className=" my-4 container">
          <div className="row gap-2">
            <Women
              imgSrc={"d1.webp"}
              title={"Women Fit and Flare Yellow Dress"}
              price={"₹799"}
              ofrPrice={"₹2,689"}
              discount={"70% off"}
              buyLink={
                "https://www.flipkart.com/janasya-women-fit-flare-yellow-dress/p/itm51b626aaff34c?pid=DREGFSU9X8CFKPHU&lid=LSTDREGFSU9X8CFKPHUEAZ81X&marketplace=FLIPKART&q=women+dress&store=clo%2Fodx%2Fmaj%2Fjhy&srno=s_1_6&otracker=AS_QueryStore_OrganicAutoSuggest_2_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_5_na_na_na&fm=search-autosuggest&iid=e2ed6533-540b-4137-85d7-bd83d90332a1.DREGFSU9X8CFKPHU.SEARCH&ppt=sp&ppn=sp&ssid=l3nunyx6ls0000001721927031079&qH=42247422fe19fd75"
              }
            ></Women>

            <Women
              imgSrc={"d2.webp"}
              title={"Women A-line Pink, White, Green Dress"}
              price={"₹499"}
              ofrPrice={"₹1,439"}
              discount={"65% off"}
              buyLink={
                "https://www.flipkart.com/metronaut-women-a-line-pink-white-green-dress/p/itma357451fec84a?pid=DREGWKCGMHUZDYSY&lid=LSTDREGWKCGMHUZDYSYXC2KMN&marketplace=FLIPKART&q=women+dress&store=clo%2Fodx%2Fmaj%2Fjhy&srno=s_1_14&otracker=AS_QueryStore_OrganicAutoSuggest_2_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_5_na_na_na&fm=search-autosuggest&iid=e2ed6533-540b-4137-85d7-bd83d90332a1.DREGWKCGMHUZDYSY.SEARCH&ppt=sp&ppn=sp&qH=42247422fe19fd75"
              }
            ></Women>

            <Women
              imgSrc={"d3.webp"}
              title={"Women Bodycon Maroon Dress"}
              price={"₹899"}
              ofrPrice={"₹2,599"}
              discount={"65% off"}
              buyLink={
                "https://www.flipkart.com/owl-mink-women-bodycon-maroon-dress/p/itm0be63ba6fcb1e?pid=DREH2W2YGNGRSANV&lid=LSTDREH2W2YGNGRSANVEBXT6M&marketplace=FLIPKART&q=women+dress&store=clo%2Fodx%2Fmaj%2Fjhy&srno=s_1_17&otracker=AS_QueryStore_OrganicAutoSuggest_2_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_5_na_na_na&fm=search-autosuggest&iid=en_D0__OatgtFiAnGMXSjQA15iyiHEjRoGEbxcIEZ85etloXcD4Vz0ALO4exzfdFa0eryBtSuiU1JaKnVWF6lpliQ%3D%3D&ppt=sp&ppn=sp&qH=42247422fe19fd75"
              }
            ></Women>

            <Women
              imgSrc={"d4.webp"}
              title={"Women Bodycon Dark Green Dress"}
              price={"₹723"}
              ofrPrice={"₹2,449"}
              discount={"70% off"}
              buyLink={
                "https://www.flipkart.com/vaararo-women-bodycon-dark-green-dress/p/itm9280cf243be92?pid=DREH2UYBHFFRKATW&lid=LSTDREH2UYBHFFRKATWDU22SE&marketplace=FLIPKART&q=women+dress&store=clo%2Fodx%2Fmaj%2Fjhy&srno=s_1_36&otracker=AS_QueryStore_OrganicAutoSuggest_2_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_5_na_na_na&fm=search-autosuggest&iid=e2ed6533-540b-4137-85d7-bd83d90332a1.DREH2UYBHFFRKATW.SEARCH&ppt=sp&ppn=sp&qH=42247422fe19fd75"
              }
            ></Women>

            <Women
              imgSrc={"h1.webp"}
              title={"Women Grey Shoulder Bag"}
              price={"₹891"}
              ofrPrice={"₹1,999"}
              discount={"55% off"}
              buyLink={
                "https://www.flipkart.com/nicoberry-women-grey-shoulder-bag/p/itm26f05d18853c3?pid=HMBHFMH6CPWZTZSG&lid=LSTHMBHFMH6CPWZTZSGFNWDFB&marketplace=FLIPKART&store=reh%2Fihu%2Fm08&srno=b_1_5&otracker=browse&fm=search-autosuggest&iid=1fcdedd4-0410-40fc-b90d-46f8334973e6.HMBHFMH6CPWZTZSG.SEARCH&ppt=sp&ppn=sp&ssid=sp8j0lj69c0000001721927768413"
              }
            ></Women>

            <Women
              imgSrc={"j1.webp"}
              title={"Alloy Multicolor Jewel Set"}
              price={"₹1,448"}
              ofrPrice={"₹1,398"}
              discount={"54% off"}
              buyLink={
                "https://www.flipkart.com/dc-alloy-multicolor-jewellery-set/p/itm8ed5383fe17ec?pid=JWSGET56RN66TVNG&lid=LSTJWSGET56RN66TVNGSRZY26&marketplace=FLIPKART&q=artificial+jewellery+for+women&store=mcr%2F96v%2Fyx2&srno=s_1_12&otracker=AS_QueryStore_OrganicAutoSuggest_1_19_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_19_na_na_na&fm=search-autosuggest&iid=08b82b6d-d37b-47cc-a979-2c0a48bb5881.JWSGET56RN66TVNG.SEARCH&ppt=sp&ppn=sp&ssid=bulbsyli680000001721927901930&qH=db5ba3edd1478aed"
              }
            ></Women>

            <Women
              imgSrc={"db1.webp"}
              title={"Women Printed Pure Cotton Anarkali Kurta (Dark Blue)"}
              price={"₹1,073"}
              ofrPrice={"₹3,699"}
              discount={"70% off"}
              buyLink={
                "https://www.flipkart.com/sangria-women-printed-anarkali-kurta/p/itm196ff2d9cb93f?pid=KTAFM68QYMZEZYB5&lid=LSTKTAFM68QYMZEZYB5F8PNKZ&marketplace=FLIPKART&q=kurtas+kurtis&store=clo%2Fcfv%2Fcib%2Frkt&srno=s_1_8&otracker=search&fm=search-autosuggest&iid=en_Vo5tBPeiTv4ydv7IbXD30mwjhtUbiqPMS5-LK0FFldSXMiahnyVNNVaQ8F8QoxB4ebhNPrqBIzdxPP8qQMvhJw%3D%3D&ppt=sp&ppn=sp&ssid=oyjsfqcksg0000001721928067202&qH=5985e3313e9e348f"
              }
            ></Women>

            <Women
              imgSrc={"heal1.webp"}
              title={"Women Heels Sandal (Beige,5)"}
              price={"₹799"}
              ofrPrice={"₹1,499"}
              discount={"46% off"}
              buyLink={
                "https://www.flipkart.com/denill-women-heels/p/itm2eb6c637f2410?pid=SNDGAMFM4HRGRGPN&lid=LSTSNDGAMFM4HRGRGPNKCFBLG&marketplace=FLIPKART&store=osp%2Fiko%2F6q1&spotlightTagId=BestsellerId_osp%2Fiko%2F6q1&srno=b_1_13&otracker=nmenu_sub_Women_0_Heels&fm=search-autosuggest&iid=8d0ca3b7-b3b5-4730-a33e-c6e970572518.SNDGAMFM4HRGRGPN.SEARCH&ppt=browse&ppn=browse&ssid=t6m6kltc0w0000001721928296084"
              }
            ></Women>
          </div>
        </div>
      </>
    );
  } else {
    alert("Something Went Wrong");
  }
  //   return (
  //     <>

  //     </>
  //   )
}

export default Cardcondition;
