String.prototype.titleize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function replaceBoringWords(content){
	var dictionary = {
		"witnesses":                            "these dudes I know",
		"allegedly":                            "kinda probably",
		"new study":                            "Tumblr post",
		"rebuild":                              "avenge",
		"space":                                "spaaace",
		"Google Glass":                         "virtual boy",
		"smartphone":                           "pokedex",
		"electric":                             "atomic",
		"senator":                              "elf-lord",
		"car":                                  "cat",
		"election":                             "eating contest",
		"congressional leaders":                "river spirits",
		"Homeland Security":                    "Homestar Runner",
		"could not be reached for comment":     "is guilty and everyone knows it",
        "debate":                               "dance-off",
        "self\\-?driving":                      "uncontrollably swerving",
        "poll":                                 "psychic reading",
        "candidate":                            "airbender",
        "drone":                                "dog",
        "vows\\s+to":                           "probably won't",
        "at large":                             "very large",
        "successful":                           "sudden",
        "^(physically\\s)expands":              "physically expands",
        "(first|second|third)(\\-|\\s)?degree": "friggin' awful",
        "an unknown number":                    "like hundreds",
        "front\-?runner":                       "blade-runner",
        "global":                               "spherical",
        // we need to replace 'years' and 'minutes' with placeholders,
        // the replace those placeholders with minutes and years
        "years":                                "replacedYrs",
        "minutes":                              "replacedMins",
        "replacedYrs":                          "minutes",
        "replacedMins":                         "years",
        "no indication":                        "lots of signs",
        "urged restraint":                      "drunkenly egged on",
        "horsepower":                           "tons of horsemeat",
        "gaffe":                                "magic spell",
        "ancient":                              "haunted",
        "star\-?studded":                       "blood-soaked",
        "silver bullet":                        "way to kill werewolves",
        "subway system":                        "tunnels I found",
        "surprising":                           "surprising (but not to me)",
        "war of words":                         "interplanetary war",
        "tension":                              "sexual tension",
        "cautiously optimistic":                "delusional",
        "Doctor Who":                           "The Big Bang Theory",
        "win votes":                            "find Pokémon",
        "behind the headlines":                 "beyond the grave",
        "email":                                "poem",
        "Facebook post":                        "poem",
        "tweet":                                "poem",
        "latest":                               "final",
        "disrupt":                              "destroy",
        "meeting":                              "ménage à trois",
        "scientists":                           "Channing Tatum and his friends",
        "you won't believe":                    "I'm really sad about"
	}

	for (key in dictionary) {
		content = content.replace(new RegExp(key, "g"), dictionary[key]);

		newkey = key.titleize();
		dictionary[newkey] = dictionary[key].titleize();
		content = content.replace(new RegExp(newkey, "g"), dictionary[newkey]);
  }

  return content;
}

document.body.innerHTML = replaceBoringWords(document.body.innerHTML);