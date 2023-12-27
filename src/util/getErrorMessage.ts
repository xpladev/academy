const getErrorMessage = (returnCode: string) => {
    switch (returnCode) {
        case "401":
            return ["Failed to Get User Information", "Failed to retrieve the required User Information during server communication."];
        case "405":
            return ["Request Information Not Found", "Essential information is missing to proceed with the transaction."];
        case "407":
            return ["Invalid Input Value", "Convert failed because of less quantity input than the minimum required for the conversion process."];
        case "408":
            return ["Insufficient Currency to Convert", "Convert failed because of greater quantity input than what you own."];
        case "417":
            return ["Purchase Conditions Not Met", "Have enough ACADEMY-TKN and $XPLA (as transaction fee) for NFT purchases."];
        case "498":
            return ["Transaction in Progress", "The transaction is currently in progress or has been completed. If there is no response for 2 minutes, please retry the transaction."];
        case "499":
            return ["Wallet Server Error", "An error during communication with the VAULT server halted the transaction. "];
        case "601":
            return ["Insufficient Transaction Fee", "Have enough $XPLA for the transaction fee, then try again."];
        case "602":
            return ["VAULT Connection Error", "Connection with XPLA Vault has been disconnected due to a session expiration. \n Please refresh the page using the F5 key!"];
        case "603":
            return ["VAULT Sign Error", "An error occurred during the Confirm process in XPLA VAULT due to issues such as 'Confirmation Cancel'."];
        case "604":
            return ["Inappropriate Chain Network", `This page is available on XPLA Testnet. \n Please change your network settings to Testnet within XPLA VAULT.`];
        default:
            return undefined;
    }
}

export default getErrorMessage;