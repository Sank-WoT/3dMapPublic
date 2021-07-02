const defaultState = {
  valueDetailShow: false,
  showLevel: 0,
  currentLevelNumber: 0,
  countLevels: 0,
  selectCabinet: 0,
  openSearchValue: false,
  sortCabinets: false,
  inputSearch: "",
  showContent: false,

  cabinetDefault: [
  {
    dataLevel: 1,
    dataCategory: 1,
    dataSpace: 104,
    href: "#",
    name: "Гардероб"
  },

  {
    dataLevel: 1,
    dataCategory: 1,
    dataSpace: 103,
    href: "#",
    name: "Пост охраны"
  },

  {
    dataLevel: 1,
    dataCategory: 1,
    dataSpace: 112,
    href: "#",
    name: "Аудитория 1.112"
  },

  {
    dataLevel: 1,
    dataCategory: 1,
    dataSpace: 114,
    href: "#",
    name: "Аудитория 1.114"
  },

  {
    dataLevel: 1,
    dataCategory: 1,
    dataSpace: 115,
    href: "#",
    name: "Аудитория 1.115"
  },

  {
    dataLevel: 1,
    dataCategory: 1,
    dataSpace: 120,
    href: "#",
    name: "Аудитория 1.120"
  },

  {
    dataLevel: 1,
    dataCategory: 1,
    dataSpace: 121,
    href: "#",
    name: "Аудитория 1.121"
  },

   {
    dataLevel: 1,
    dataCategory: 1,
    dataSpace: 108,
    href: "#",
    name: "Аудитория 1.108"
  },

  {
    dataLevel: 1,
    dataCategory: 1,
    dataSpace: 109,
    href: "#",
    name: "Аудитория 1.109"
  },

  {
    dataLevel: 1,
    dataCategory: 2,
    dataSpace: 117,
    href: "#",
    name: "WC"
  },

  {
    dataLevel: 1,
    dataCategory: 2,
    dataSpace: 116,
    href: "#",
    name: "WC"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 203,
    href: "#",
    name: "Аудитория 2.203"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 204,
    href: "#",
    name: "Аудитория 2.204"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 205,
    href: "#",
    name: "Аудитория 2.205"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 218,
    href: "#",
    name: "Аудитория 2.218"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 206,
    href: "#",
    name: "Аудитория 2.206"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 207,
    href: "#",
    name: "Конференц зал (Ауд 207)"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 209,
    href: "#",
    name: "Аудитория 2.209"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 208,
    href: "#",
    name: "Аудитория 2.208"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 212,
    href: "#",
    name: "Аудитория 2.212"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 210,
    href: "#",
    name: "Аудитория 2.210"
  },

  {
    dataLevel: 2,
    dataCategory: 1,
    dataSpace: 211,
    href: "#",
    name: "Аудитория 2.211"
  },

  {
    dataLevel: 2,
    dataCategory: 2,
    dataSpace: 213,
    href: "#",
    name: "WC"
  },

  {
    dataLevel: 2,
    dataCategory: 2,
    dataSpace: 217,
    href: "#",
    name: "WC"
  },
],

  cabinetDescription: [
  {
    dataCategory: 1,
    dataSpace: 104,
    dataName: "Гардероб", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Гардероб - место где можно оставить свои вещи"
  },

  {
    dataCategory: 1,
    dataSpace: 103,
    dataName: "Пост охраны", 
    dataTime: " Круглосуточно",
    dataPhone: " - ",
    dataDescription: "Пост охраны мимо которой не пройти"
  },

  {
    dataCategory: 1,
    dataSpace: 112,
    dataName: "Тренажерная аудитория", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "-"
  },

  {
    dataCategory: 1,
    dataSpace: 114,
    dataName: "Учебная аудитория", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "-"
  },

  {
    dataCategory: 1,
    dataSpace: 115,
    dataName: "Аудитория 1.115", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: " - "
  },

  {
    dataCategory: 1,
    dataSpace: 108,
    dataName: "Аудитория 1.108", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 1.108"
  },

  {
    dataCategory: 1,
    dataSpace: 109,
    dataName: "Аудитория 1.109", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 1.109"
  },

  {
    dataCategory: 1,
    dataSpace: 120,
    dataName: "Аудитория 1.120", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 1.120"
  },

  {
    dataCategory: 1,
    dataSpace: 121,
    dataName: "Аудитория 1.121", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 1.121"
  },

  {
    dataCategory: 2,
    dataSpace: 116,
    dataName: "WC", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "WC"
  },

  {
    dataCategory: 2,
    dataSpace: 1.117,
    dataName: "WC", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "WC"
  },

  {
    dataCategory: 1,
    dataSpace: 203,
    dataName: "Учебная адутория 2.203", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Учебная аудитория 2.203"
  },

  {
    dataCategory: 1,
    dataSpace: 205,
    dataName: "Учебная адутория 2.205", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Учебная аудитория 2.205"
  },

  {
    dataCategory: 2,
    dataSpace: 213,
    dataName: "WC", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "WC"
  },

  {
    dataCategory: 2,
    dataSpace: 217,
    dataName: "WC", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "WC"
  },

  {
    dataCategory: 1,
    dataSpace: 206,
    dataName: "Аудитория 2.206", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 2.206"
  },

  {
    dataCategory: 1,
    dataSpace: 218,
    dataName: "Аудитория 2.218", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 2.218"
  },

  {
    dataCategory: 1,
    dataSpace: 208,
    dataName: "Аудитория 2.208", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 2.208"
  },

  {
    dataCategory: 1,
    dataSpace: 209,
    dataName: "Аудитория 2.209", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 2.209"
  },

  {
    dataCategory: 1,
    dataSpace: 207,
    dataName: "Конференц зал (Ауд 207)", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Конференц зал  (Ауд 207)"
  },

  {
    dataCategory: 1,
    dataSpace: 210,
    dataName: "Аудитория 2.210", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 2.210"
  },

  {
    dataCategory: 1,
    dataSpace: 211,
    dataName: "Аудитория 2.211", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 2.211"
  },

  {
    dataCategory: 1,
    dataSpace: 212,
    dataName: "Аудитория 2.212", 
    dataTime: " 9:00 &mdash; 17:45",
    dataPhone: " - ",
    dataDescription: "Аудитория 2.212"
  },


  ]
}

const initialState = {
  valueDetailShow: defaultState.valueDetailShow,
  showLevel: defaultState.valueDetailShow,
  currentLevelNumber: defaultState.valueDetailShow,
  countLevels: defaultState.valueDetailShow,
  selectCabinet: defaultState.valueDetailShow,
  openSearchValue: defaultState.openSearchValue,
  sortCabinets: defaultState.sortCabinets,
  cabinetDescription: [],
  cabinetData: defaultState.cabinetDefault,
  inputSearch: defaultState.inputSearch,
  showContent: defaultState.showContent
}

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "CLOSEDETAIL":
      return {...state, showContent: false, selectCabinet: 0, cabinetDescription: []}
    case "SEARCHCABINETS": 
      return {...state, inputSearch: action.input};

    case "DETAILSHOW":
      var filterLevel = defaultState.cabinetDefault.filter(function(e){
         return e.dataLevel == action.level;
      });
      var resultFilterLevel = JSON.parse(JSON.stringify(filterLevel));
      return { ...state, valueDetailShow: true, currentLevelNumber: action.level, cabinetData: resultFilterLevel};

    case "SHOWALLLEVEL":
      return { ...initialState};

    case "UPLEVELMALL":
      var filterLevel = defaultState.cabinetDefault.filter(function(e){
         return e.dataLevel == state.currentLevelNumber + 1;
      });
      var resultFilterLevel = JSON.parse(JSON.stringify(filterLevel));
      return { ...state,  currentLevelNumber: ++state.currentLevelNumber, cabinetData: resultFilterLevel};

    case "DOWNLEVELMALL":
      var filterLevel = defaultState.cabinetDefault.filter(function(e){
         return e.dataLevel == state.currentLevelNumber - 1;
      });
      var resultFilterLevel = JSON.parse(JSON.stringify(filterLevel));
      return { ...state,  currentLevelNumber: --state.currentLevelNumber, cabinetData: resultFilterLevel};

    case "SETCOUNTLEVEL":
      return { ...state,  countLevels: action.countLevels};

    case "SELECTCABINET":
      var filterCabinetDescription = defaultState.cabinetDescription.filter(function(e){
         return e.dataSpace == action.selectCabinet;
      });
      var resultCabinetDescription = JSON.parse(JSON.stringify(filterCabinetDescription));
      console.log(resultCabinetDescription);
      var filterLevel = defaultState.cabinetDefault.filter(function(e){
         return e.dataLevel == action.cabinetLevel;
      });
      var resultFilterLevel = JSON.parse(JSON.stringify(filterLevel));
      return { ...state,  countLevels: action.countLevels, cabinetData: resultFilterLevel, cabinetDescription: resultCabinetDescription, selectCabinet: action.selectCabinet, currentLevelNumber: action.cabinetLevel, valueDetailShow: true, showContent: true};
    
    case "OPENSEARCH":
      return { ...state, openSearchValue: true };
    
    case "CLOSESEARCH":
      return { ...state, openSearchValue: false };

    case "CLEARAREA":
      return { ...state };

    case "SORTCABINETS":
      if(state.sortCabinets == false) {
        var sortResult = state.cabinetData.sort(function(a, b) {
          return ('' + a.name).localeCompare(b.name);
        });
        var sort = JSON.parse(JSON.stringify(sortResult))
        var isSort =  true;
      } else {
        var sortResult = state.cabinetData.sort(function(a, b) {
          return ('' + b.name).localeCompare(a.name);
        });
        var sort = JSON.parse(JSON.stringify(sortResult))
        var isSort =  false;
      }
      console.log("reducer: " + sort);
      return { ...state, sortCabinets: isSort, cabinetData: sort };
    default:
      return state;
  }
}

export default addReducer;
