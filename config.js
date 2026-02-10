const CONFIG = {
   
    valentineName: "mia noela",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Background image
    backgroundImage: {
        enabled: true,                                          // Enable background image
        url: "image.png",                                       // Path to your background image
        opacity: 0.3,                                           // Image opacity (0.0-1.0, lower = more transparent)
        repeat: "repeat",                                       // How image repeats: "repeat", "no-repeat", "repeat-x", "repeat-y"
        size: "auto"                                            // Size: "cover", "contain", "auto", or specific size like "200px"
    },

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻','🐰']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "will you please be my Valentine 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "WAHOOO NOW CLICK THE BUTTON BELOWW",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Redirect button (appears after they say "Yes!")
    redirectButton: {
        enabled: true,                                          // Enable redirect button
        text: "Open Your Special Gift 🎁💝",                   // Button text
        url: "https://www.iluvyou.app/valentine/5?d=eyJuYW1lIjoiTWlhIE5vZWxhIiwiZGF5cyI6NTgsImV4cGVyaWVuY2UiOiJ2YWxlbnRpbmUiLCJzdGVwcyI6eyJzdGVwMSI6eyJlbmFibGVkIjp0cnVlLCJzdWJ0aXRsZSI6IlRvIG15IGJlYXV0aWZ1bCBnaXJsZnJpZW5kIGFuZCBnb3JnZW91cyB3aWZlICJ9LCJzdGVwMiI6eyJlbmFibGVkIjp0cnVlfSwic3RlcDMiOnsiZW5hYmxlZCI6dHJ1ZSwiaGVhZGluZyI6Im15IHNvbGFjZSBhbmQgbXkgc29mdCBlbWJyYWNlIiwicGFyYWdyYXBoIjoiTmFzYXlvIGFuZyBwdXNvIGtvIn0sInN0ZXA0Ijp7ImltYWdlcyI6W10sImVuYWJsZWQiOnRydWV9LCJzdGVwNSI6eyJwcm9tcHQiOiJSVUIgUlVCIFJVQiIsImVuYWJsZWQiOnRydWUsInNjcmF0Y2hUZXh0Ijoid2lsbCB5b3UgcGxlYXNlIGJlIG15IHZhbGVudGluZSBtaWEgYmVsbGEgbm9lbGEifX0sIm11c2ljIjp7ImlkIjoiV292VUdiQmx6cUEiLCJ0eXBlIjoieW91dHViZSJ9fQ=="
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/duqfcjfhe/video/upload/v1770729965/Piccola_Stella_neehne.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
