for(let i = 0; i < s.length; i++) {
        let ch = s[i];

        if(map.get(ch) >= start) start = map.get(ch) + 1;

        map.set(ch, i);
}