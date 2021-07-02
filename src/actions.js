import { SAVE, DETAILSHOW, SHOWALLLEVEL, SETCOUNTLEVEL, UPLEVELMALL, DOWNLEVELMALL, SELECTCABINET, OPENSEARCH, CLOSESEARCH, SORTCABINETS, SEARCHCABINETS, CLOSEDETAIL, CLEARAREA, SELECTAREA} from "./actionsType";

export function incrementAction() {
    return {
      type: SAVE,
    };
  }

export function showDetailLevel(level) {
    return {
      type: DETAILSHOW,
      level
    };
  }


export function showAllLevels() {
  return {
    type: SHOWALLLEVEL,
  };
}

export function setCountLevel() {
	var countLevels = document.getElementsByClassName('level').length;
	console.log("function " + countLevels);
	return {
	  type: SETCOUNTLEVEL,
	  countLevels
	};
}

export function upLevelMall() {
	return {
	  type: UPLEVELMALL
	};
}

export function downLevelMall() {
	return {
	  type: DOWNLEVELMALL
	};
}

export function selectCabinet(selectCabinet, cabinetLevel) {
  // i will need to think as rewrite the code
  var countLevels = document.getElementsByClassName('level').length;
  var idCab = "F-" + selectCabinet;
  var cab = document.getElementById(idCab);
  cab.classList.add("selectedArea");
  return {
    type: SELECTCABINET,
    selectCabinet,
    cabinetLevel,
    countLevels
  };
}

export function openSearch() {
  return {
    type: OPENSEARCH,
  };
}

export function closeSearch() {
  return {
    type: CLOSESEARCH,
  };
}

export function sortCabinets() {
  return {
    type: SORTCABINETS,
  };
}

export function searchCabinets(input) {
  return {
    type: SEARCHCABINETS,
    input: input.target.value
  };
}

export function closeDetail() {
  return {
    type: CLOSEDETAIL,
  };
}

//Delete all classes from map. Because created component map not give flexible approach
export function clearArea() {
  var elementList = document.querySelectorAll(".selectedArea");
  elementList.forEach(el =>  el.classList.remove("selectedArea"))
  return {
    type: CLEARAREA,
  };
}

export function selectArea() {
  return {
    type: SELECTAREA,
  };
}


