// SPDX-License-Identifier: GPL-3.0
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.25 <0.9.0;

abstract contract InitData {

    struct Image {
        string name;
        string avatar;
        string description;
        uint256 amountVote;
    }

    mapping(uint256 => address) public artistId;
    mapping(uint256 => Image) public imageId;

    string public baseURI;

    /**
     * Dummy data for event
     * In the future, we can accept the same from construction,
     * which will be called at the time of deployment
     */
    function _initializeData() internal {

        imageId[1] = Image({
            name: "Chi Dan",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x1.jpg")) : "",
            description: "The music that Chi Dan pursues is Pop and Ballad. He has a gentle lyrical baritone voice and catches listeners' ears. https://www.youtube.com/channel/UC9Z4fZvQyEn-6MMazzGKveg",
            amountVote: 0
        });
        artistId[1] = 0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898;

        imageId[2] = Image({
            name: "Jack",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x2.jpg")) : "",
            description: "Jack - J97 claims his songs are 'a nostalgic sadness' and 'combined by European, American and Vietnamese music'. https://zingmp3.vn/album/Nhung-Bai-Hat-Hay-Nhat-Cua-Jack-J97-Jack-J97/ZUDICAF0.html",
            amountVote: 0
        });
        artistId[2] = 0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256;

        imageId[3] = Image({
            name: "Dan Truong",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x3.jpg")) : "",
            description: "Dan Truong is a Vietnamese male singer. He is a typical face associated with historical music videos. https://zingmp3.vn/album/Nhung-Bai-Hat-Hay-Nhat-Cua-Dan-Truong-Dan-Truong/ZWZ9D08C.html",
            amountVote: 0
        });
        artistId[3] = 0xA84937C6F5f6ad83d885E977262d8d7A237D012A;

        imageId[4] = Image({
            name: "Ho Ngoc Ha",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x4.jpg")) : "",
            description: "She is known as the 'Entertainment Queen' of Vietnam. https://www.youtube.com/channel/UCNgCserSzcAWFOY-7_f3iug",
            amountVote: 0
        });
        artistId[4] = 0xb28B3C557a3D0CE38CA0dDfe988ab355473C4130;

        imageId[5] = Image({
            name: "Duc Phuc",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x5.jpg")) : "",
            description: "He is widely known to the audience as the champion of The Voice Vietnam 2015. https://www.youtube.com/channel/UCVIIa6OL-FautUqhHjAoz_A",
            amountVote: 0
        });
        artistId[5] = 0x9C5232D1db9EAa4B87c8b8D1846A9bBC2A7AF91E;

        imageId[6] = Image({
            name: "Nhat Phong",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x6.jpg")) : "",
            description: "Nhat Phong continues to choose ballad music to conquer the audience. https://www.youtube.com/channel/UCGEzzX4Zq4lX2Vlylam6EGQ",
            amountVote: 0
        });
        artistId[6] = 0xE62F5E866C0687fCC248dA1AA80296BFEb677ca5;
    }
}