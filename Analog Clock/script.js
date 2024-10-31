function updateClock() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    // Calculate the degrees for each hand
    const secondDegrees = ((seconds / 60) * 360) + 90; // 90 degrees offset
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // 6 degrees per second
    const hourDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30) + 90; // 30 degrees per minute

    // Apply rotation
    document.getElementById('second').style.transform = `rotate(${secondDegrees}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDegrees}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
