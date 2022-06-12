function browserHistory(browserHistoryAsObj, operations) {
    let openTabs = [];
    let recentlyClosed = [];
    let browserLogs = [];

    for (let operation of operations) {
        openTabs = Object.values(browserHistoryAsObj)[1];
        recentlyClosed = Object.values(browserHistoryAsObj)[2];
        browserLogs = Object.values(browserHistoryAsObj)[3];
        let command = '';
        let website = '';

        if (operation != 'Clear History and Cache') {
            operation = operation.split(' ');
            command = operation[0];
            website = operation[1];

            if (command == 'Open') {
                openNewTab(openTabs, website, browserLogs, browserHistoryAsObj);

            } else if (command == 'Close') {
                closeTab(openTabs, recentlyClosed, website, browserLogs, browserHistoryAsObj);
            }

        } else {
            clear(openTabs, recentlyClosed, browserLogs, browserHistoryAsObj);
        }
    }
    function openNewTab(openTabs, website, browserLogs, browserHistoryAsObj) {
        openTabs.push(website);
        browserLogs.push(`Open ${website}`);
        browserHistoryAsObj['Open Tabs'] = openTabs;
        browserHistoryAsObj['Browser Logs'] = browserLogs;
        return browserHistoryAsObj;
    }

    function closeTab(openTabs, recentlyClosed, website, browserLogs, browserHistoryAsObj) {
        let indexOfWebsite = openTabs.indexOf(website);
        if (indexOfWebsite != -1) {
            openTabs.splice(indexOfWebsite, 1);
            recentlyClosed.push(website);
            browserLogs.push(`Close ${website}`);
            browserHistoryAsObj['Open Tabs'] = openTabs;
            browserHistoryAsObj['Recently Closed'] = recentlyClosed;
            browserHistoryAsObj['Browser Logs'] = browserLogs;
        }
        return browserHistoryAsObj;
    }

    function clear(openTabs, recentlyClosed, browserLogs, browserHistoryAsObj) {
        openTabs = [];
        recentlyClosed = [];
        browserLogs = [];
        browserHistoryAsObj['Open Tabs'] = openTabs;
        browserHistoryAsObj['Recently Closed'] = recentlyClosed;
        browserHistoryAsObj['Browser Logs'] = browserLogs;

        return browserHistoryAsObj;
    }

    console.log(browserHistoryAsObj['Browser Name']);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);
}
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

);