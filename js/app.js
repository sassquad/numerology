(function () {
    // Get your perfect numerological name
    // following letter groups use array index to establish what number each letter group represents
    // i.e A is in the first group, so it's index is 1
    // F is in group 7, so it's index is 7.

    var firstNames = ["Vache", "Vacheil", "Vachel", "Vachelle", "Vadim", "Vail", "Vaile", "Vailintin", "Vaill", "Vaino", "Val", "Valdamar", "Valdemar", "Vale", "Valencio", "Valeno", "Valentijan", "Valentim", "Valentin", "Valentine", "Valentinian", "Valentiniano", "Valentino", "Valentinus", "Valentio", "Valenton", "Valentyn", "Valentin", "Valerian", "Valeriano", "Valerien", "Valerii", "Valerio", "Valerius", "Valery", "Valeryan", "Valeryn", "Valiant", "Valis", "Valle", "Vallis", "Valo", "Valor", "Valter", "Valters", "Valther", "Valtr", "Van", "Vance", "Vandal", "Vander", "Vandyke", "Vane", "Vanechka", "Vanek", "Vanentin", "Vanka", "Vann", "Vanni", "Vannie", "Vanno", "Vanny", "Vano", "Vanusha", "Vanya", "Varan", "Vardaan", "Varden", "Vardon", "Varfolomei", "Vargas", "Varnan", "Varoun", "Varron", "Vartan", "Varun", "Vas", "Vasant", "Vasanth", "Vasaya", "Vasco", "Vasek", "Vaselios", "Vashon", "Vasil", "Vasilak", "Vasile", "Vasili", "Vasilii", "Vasilik", "Vasilios", "Vasilius", "Vasiliy", "Vasilos", "Vasilus", "Vasily", "Vaska", "Vaslek", "Vaso", "Vasos", "Vassili", "Vassily", "Vassos", "Vasya", "Vasyenka", "Vaughan", "Vaughen", "Vaughn", "Vaun", "Vaune", "Vazul", "Ved", "Veer", "Veeti", "Vega", "Vego", "Veit", "Velten", "Ven", "Vencel", "Vencent", "Venceslao", "Venceslau", "Venceslav", "Venceslas", "Venedict", "Venedictos", "Venedikt", "Venediktos", "Venetio", "Venetziano", "Veneziano", "Venezio", "Veniamin", "Venjamin", "Venka", "Venn", "Venturi", "Venturio", "Venturo", "Venya", "Vercy", "Verdan", "Verdi", "Verdon", "Verdun", "Vere", "Vered", "Vereen", "Veren", "Vereno", "Verge", "Vergil", "Vergitio", "Verill", "Verino", "Verl", "Verle", "Verlin", "Verlon", "Verlyn", "Vermont", "Vern", "Vernados", "Vernal", "Verne", "Vernell", "Vernen", "Verner", "Verney", "Vernin", "Vernon", "Vero", "Verrall", "Verrell", "Verrill", "Verroll", "Veryl", "Vesper", "Vester", "Vesuvio", "Vesuvius", "Viaan", "", "Vic", "Vice", "Vicenc", "Vicente", "Vicenzo", "Vicenc", "Vick", "Victa", "Victer", "Victoir", "Victor", "Victoriano", "Victorien", "Victorin", "Victorino", "Victorio", "Victoro", "Vicus", "Vida", "Vidal", "Vidale", "Vidall", "Vidalo", "Vidar", "Videl", "Videlio", "Videll", "Vidor", "Viel", "Viggo", "Vigo", "Vihaan", "Vijay", "Vijun", "Vikram", "Vikrum", "Viktor", "Vila", "Vilek", "Vilem", "Vilfredo", "Vilfrido", "Vilgot", "Vilhelm", "Vilhelms", "Vilho", "Vili", "Viliam", "Viliami", "Viliamu", "Vilis", "Viljami", "Viljo", "Vilko", "Villard", "Ville", "Villem", "Villiers", "Villy", "Vilmo", "Vilmos", "Vilous", "Vilppu", "Vilem", "Vimka", "Vin", "Vince", "Vincence", "Vincens", "Vincent", "Vincentius", "Vincents", "Vincenzio", "Vincenzo", "Vinci", "Vincien", "Vinciente", "Vincint", "Vine", "Ving", "Vinicent", "Vinn", "Vinnee", "Vinney", "Vinni", "Vinnie", "Vinnis", "Vinny", "Vinsent", "Vinsint", "Vinson", "Vinton", "Vinzenz", "Vireo", "Virge", "Virgel", "Virgial", "Virgil", "Virgile", "Virgilio", "Virgle", "Viridian", "Virle", "Viro", "Vischer", "Vishnu", "Visscher", "Vit", "Vital", "Vitale", "Vitalis", "Vitaly", "Vitas", "Vitin", "Vitis", "Vito", "Vitor", "Vittore", "Vittorio", "Vitus", "Vitya", "Vivaan", "Vivaldo", "Vivian", "Viviani", "Viviano", "Vivien", "Vivyan", "Vlad", "Vladamir", "Vladi", "Vladik", "Vladimar", "Vladimeer", "Vladimer", "Vladimere", "Vladimir", "Vladimire", "Vladimyr", "Vladimir", "Vladislav", "Vladjimir", "Vladka", "Vladko", "Vladlen", "Vladmir", "Vlady", "Vladya", "Vlas", "Vlasislava", "Volante", "Volker", "Vollie", "Vollker", "Volney", "Volodimir", "Volodya", "Volya", "Von", "Vonn", "Vonny", "Vougn", "Vova", "Vovka", "Vrai", "Vulcan", "Vyacheslav", "Vyncent", "Vyncint", "Vyncynt", "Vyse", "Vytas", "Vyvian", "Vyvyan", "Vaclav", "Vana", "Vanuska"];

    var Numerology = function (names, desiredNumber, container) {
        var groups = [
            ['A', 'I', 'J', 'Q', 'Y'],
            ['B', 'K', 'R'],
            ['C', 'G', 'L', 'S'],
            ['D', 'M', 'T'],
            ['E', 'H', 'N', 'X'],
            ['U', 'V', 'W'],
            ['F', 'O'],
            ['P', 'Z']
        ];
        
        // get numerological value of name
        var getNumerology = function (name) {
            var total = 0;
            for (i = 0; i < name.length; i++) {
                character = name.charAt(i); // get each letter in name
                for (j = 0; j < groups.length; j++) {
                    //loop through numerology array
                    for (k = 0; k < groups[j].length; k++) {
                        //loop through letters within each numerology array
                        if (groups[j][k] == character) { // character match?
                            total += j + 1; // use array index value to add to total for each name
                        }
                    }
                }
            }
            return total;
        };

        // loop through each word
        firstNames.forEach(function (name, index) {
            name = name.toUpperCase(); // convert names to upper case
            total = getNumerology(name);
            if (total == desiredNumber) { // does total equal numerology value required?
                $("<li><strong>" + name + "</strong> = " + total + "</li>").appendTo(container); // output matching numerology names
            }
        });
    };

    $(function () {
        Numerology(firstNames, 22, '.name-list');
    });
})();
