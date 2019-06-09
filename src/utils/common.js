export const Common = {
    types: [
        {
            title: "All",
            value:""
        },
        {
           title: "Public",
           value: "public"
        },
        {
            title: "Private",
            value: "private"
        },
        {
            title: "Sources",
            value: "source"
        },
        {
            title: "Forks",
            value: "fork"
        },
        {
            title: "Archived",
            value: "archived"
        },
        {
            title: "Mirrors",
            value: "mirror"
        }  
    ],
    getHours: (date) => {
        var date1 = new Date();
        var date2 = new Date(date);
        var hours = Math.abs(date1 -date2)/36e5;
        return hours;
    },
    getUpdatedDate: (date) => {
        var hours = Common.getHours(date);
        if(hours < 24){
            return `${parseInt(hours)} hours ago`;
        } else {
            return `on ${new Date(date).toDateString().slice(4)}`;
        }
    },
    sortedRepos: (repos) => {
        return repos.sort( (a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    },
    getLanguages: (repos) => {
        var results = [];
        repos.forEach( current => {
            if(current.language && !results.includes(current.language)){
                results.push(current.language);
            }
        })
        return Common.languageSet(results);
    },
    languageSet: (languages) => {
        let results= [ { title: "All", value: ""}];
        languages.forEach( language => {
            results.push({title: language, value: language})
        })
        return results;
    },
    filterBySearch: (repos, searchText) => {
        return repos.filter( repo => {
            if((repo.name).search( new RegExp(searchText, "i")) !== -1){
                return repo;
            }
        })
    },
    filterByType: (repos, type) => {
        return repos.filter( repo => {
            if(type === "public" || type === ""){
                return repo;
            }
            else if(repo[type]) return repo;
        })
    },
    filterByLanguage: (repos, language) => {
        return repos.filter( repo => {
            if(language){
                if(repo.language === language) return repo;
            }
            else return repo;
        })
    },
    getRepos: async (searchText, type, language) => {
        let res = await fetch("https://api.github.com/users/supreetsingh247/repos");
        let data = await res.json();
        let typeRepos = Common.filterByType(data, type);
        let languageRepos = Common.filterByLanguage(typeRepos, language);
        return Common.filterBySearch(languageRepos, searchText);
    }
}