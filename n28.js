//28. Format Duration
const formatDuration = seconds => {
    const y = Math.floor(seconds / (3600 * 24 * 365));
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);

    if (y > 0) {
        console.log(`${y} years, ${h} hours, ${m} minutes and ${s} seconds`)
    }
    else if (h > 0) {
        console.log(`${h} hours, ${m} minutes and ${s} seconds`)
    } else {
        console.log(`${m} minutes and ${s} seconds`)
    }
}

formatDuration(123);        // "2 minutes and 3 seconds"
formatDuration(3661);       // "1 hour, 1 minute and 1 second"
formatDuration(7322);       // "2 hours, 2 minutes and 2 seconds"
formatDuration(63079322);   // "2 years, 2 hours, 2 minutes and 2 seconds"
