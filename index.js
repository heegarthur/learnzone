
function counting() {
  let score = parseInt(localStorage.getItem('totaltime') || '0', 10);
  const score_element = document.getElementById('scoreshow');
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateTimeDisplays(score) {
    const days = Math.floor(score / 86400);
    const hours = Math.floor((score % 86400) / 3600);
    const minutes = Math.floor((score % 3600) / 60);
    const seconds = score % 60;

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }

  score_element.textContent = score;
  updateTimeDisplays(score);

  setInterval(() => {
    score += 1;
    localStorage.setItem('totaltime', score.toString());
    score_element.textContent = score;
    updateTimeDisplays(score);
    levelUp(1)
  }, 1000);
}


function openurl(url) {
  window.open(url)
}
function search() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const buttons = document.querySelectorAll('button');

  buttons.forEach(btn => {
    const text = btn.textContent.toLowerCase();
    const classes = btn.className.toLowerCase();
    if (text.includes(input) || classes.includes(input)) {
      btn.style.display = '';
    } else {
      btn.style.display = 'none';
    }
  });
}

function openurl(url) {
  window.open(url, '_blank');
}


function showRandomQuote() {
  const quotes = [
    "Every challenge is a stepping stone toward your greatness.",
    "Your potential is limitless; believe in your journey.",
    "Persistence transforms obstacles into opportunities.",
    "Success is built on the foundation of hard work.",
    "Embrace the struggle; it’s the path to mastery.",
    "The effort you invest today blossoms into tomorrow’s achievements.",
    "Your dreams are worth the late nights and early mornings.",
    "Believe in the power of your dedication.",
    "Every study session is a step closer to your dreams.",
    "Turn your doubts into determination.",
    "Learning is a journey; enjoy every twist and turn.",
    "With each page you turn, you’re writing your own story of success.",
    "Failure isn’t the end; it’s a lesson in disguise.",
    "Your mindset shapes your reality; think success.",
    "Greatness is achieved one study session at a time.",
    "You hold the pen to your future; write it boldly.",
    "In the face of challenges, find your strength.",
    "Dream big, study hard, and watch the magic unfold.",
    "Let your passion fuel your perseverance.",
    "Every small effort counts; keep pushing forward.",
    "The road to success is paved with consistent effort.",
    "Your journey is unique; embrace it with pride.",
    "Learning isn’t a sprint; it’s a marathon of persistence.",
    "Cultivate curiosity, and knowledge will flourish.",
    "Your hard work today is tomorrow’s success story.",
    "Stay focused on your goals; they’re your guiding stars.",
    "The more you learn, the more you grow.",
    "Invest in yourself; it’s the best decision you’ll ever make.",
    "A positive mindset is the first step to achievement.",
    "Learning is a treasure that can’t be taken away.",
    "Every setback is a setup for a comeback.",
    "Challenge yourself; that’s where the growth happens.",
    "Let your passion for knowledge shine bright.",
    "Success isn’t about luck; it’s about preparation.",
    "Your journey may be tough, but so are you.",
    "Stay hungry for knowledge; it’s a lifelong pursuit.",
    "The key to success is to focus on goals, not obstacles.",
    "You are capable of more than you can imagine.",
    "Let each day be a new opportunity to learn.",
    "Your studies today lay the groundwork for your future.",
    "The seeds of knowledge you plant today will bloom tomorrow.",
    "Stay resilient; every effort counts in your growth.",
    "Knowledge is power; wield it wisely.",
    "You are writing your legacy with every effort you make.",
    "Believe in your ability to achieve greatness.",
    "Success is the byproduct of relentless perseverance.",
    "Harness your passion, and let it guide your studies.",
    "In the pursuit of knowledge, every question is valid.",
    "Your dreams are the blueprint of your future.",
    "Keep pushing your limits; greatness awaits on the other side.",
    "Each small step in your studies brings you closer to your dreams.",
    "Your dedication today shapes the success of tomorrow.",
    "Every late night and early morning is a step towards your future.",
    "Hard work is the bridge between where you’re and where you want to be.",
    "In the pursuit of knowledge, effort is your most loyal companion.",
    "Challenges are the weights that strengthen your academic muscles.",
    "Focus on progress, not perfection; every improvement counts.",
    "Success is a journey, not a destination; enjoy the ride.",
    "Let your determination be louder than your doubts.",
    "Every page you turn is a step toward your aspirations.",
    "The road to success is paved with perseverance and resilience.",
    "Believe in your potential; it’s the first step to achieving it.",
    "Hard work may be tough, but the rewards are worth every moment.",
    "Dream big, study hard, and transform your aspirations into reality.",
    "Your effort today is the foundation of your triumph tomorrow.",
    "Small actions lead to great achievements; start where you are.",
    "Success isn’t just about talent; it’s about dedication and grit.",
    "Stay curious, stay committed; your future self will thank you.",
    "The more you learn, the more you grow; embrace the journey.",
    "Turn your setbacks into comebacks through relentless effort.",
    "Each challenge you face is an opportunity to shine.",
    "Your determination can turn obstacles into stepping stones.",
    "The grind may be tough, but the results are empowering.",
    "Hard work is the secret ingredient to unlocking your potential.",
    "Embrace the struggle; it’s part of the path to greatness.",
    "Your academic journey is a reflection of your commitment.",
    "Invest in your education; it pays the best interest.",
    "Stay focused on your goals, and let nothing deter your path.",
    "The effort you put in today will echo in your future.",
    "Success isn’t accidental; it’s crafted through hard work.",
    "Your perseverance is the key that unlocks your potential.",
    "Let your passion for learning fuel your determination.",
    "Every study session is a step closer to your dreams.",
    "Challenge yourself daily; growth comes from pushing limits.",
    "Hard work is the soil where dreams take root.",
    "Your academic success is a reflection of your tenacity.",
    "Stay committed, and let your dedication shine through.",
    "Every moment spent studying is an investment in your future.",
    "Your future is bright when you put in the hard work today.",
    "Let your ambitions guide your studies; aim high and soar.",
    "The effort you sow today will bloom into success tomorrow.",
    "Success favors those who are willing to work for it.",
    "Push through the hard times, for they’ll lead to triumph.",
    "Your journey is unique; embrace it with determination.",
    "Each late-night study session is a step toward your legacy.",
    "Stay true to your goals; every effort brings you closer.",
    "Your academic resilience is your greatest strength.",
    "With every challenge, you become stronger and wiser.",
    "Believe in your hard work; it has the power to transform.",
    "The future belongs to those who dare to put in the effort.",

    "Every page you turn is a step closer to your dreams.",
    "Success is built on the foundation of hard work and persistence.",
    "Your effort today shapes your achievements tomorrow.",
    "Embrace the grind; it’s the path to greatness.",
    "Knowledge is the treasure; study is the key.",
    "With each challenge, you grow stronger and wiser.",
    "Stay focused; distractions are merely illusions.",
    "Dedication transforms ordinary tasks into extraordinary results.",
    "Your potential is limitless; keep pushing your boundaries.",
    "Each study session is an investment in your future.",
    "Dream big, study hard, and never settle.",
    "Mistakes are lessons in disguise; learn and grow.",
    "The journey of a thousand pages begins with a single word.",
    "Your mind is a garden; plant seeds of knowledge.",
    "Hard work is the bridge between goals and accomplishments.",
    "Let your passion for learning fuel your persistence.",
    "In the realm of knowledge, effort is your greatest ally.",
    "Every hour spent studying is a step toward your success story.",
    "Believe in your abilities; they’re your greatest tools.",
    "Focus on progress, not perfection.",
    "Success is a marathon, not a sprint; pace yourself.",
    "With every setback, there’s a comeback waiting to happen.",
    "Your attitude toward studying can change your entire experience.",
    "Great achievements require great effort; embrace the challenge.",
    "Your dreams are worth the hard work; never doubt that.",
    "Knowledge is a journey; enjoy every step of the way.",
    "Let determination be your guiding star.",
    "The harder you work, the luckier you become.",
    "Stay curious; it’s the key to lifelong learning.",
    "Your commitment to your goals defines your future.",
    "Persistence is the secret ingredient to success.",
    "Challenge yourself; the rewards are boundless.",
    "Success isn’t given; it’s earned through effort and resilience.",
    "When you study, you build the life you envision.",
    "Every small victory is a reason to celebrate your journey.",
    "Focus on the process, not just the end result.",
    "Your mind is a powerful tool; use it wisely.",
    "Turn your struggles into stepping stones.",
    "Believe in your journey; every effort counts.",
    "Let your hard work be the soundtrack of your success.",
    "Your future self will thank you for the effort you put in today.",
    "In the pursuit of knowledge, every challenge is an opportunity.",
    "Stay committed; the finish line is closer than you think.",
    "The pursuit of excellence begins with a single step.",
    "Your dreams are the blueprint; hard work is the construction.",
    "Treat each study session as a chance to grow.",
    "Great things come to those who hustle.",
    "Your determination is the compass that guides you to success.",
    "The road to mastery is paved with dedication.",
    "Invest in yourself; the returns are immeasurable.",
    "Every step forward is a step toward your dreams.",
    "Knowledge is a treasure that no one can take away.",
    "Dedication today shapes the success of tomorrow.",
    "Small victories lead to great achievements.",
    "Your only limit is the one you set for yourself.",
    "Learning is a journey, not a destination.",
    "Focus on progress, not perfection.",
    "With each challenge, you grow stronger.",
    "Believe in yourself and all that you’re capable of.",
    "The future belongs to those who believe in their dreams.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Every moment spent learning is an investment in your future.",
    "Let your passion fuel your study sessions.",
    "Success is a series of small wins.",
    "Your effort today plants the seeds for tomorrow’s success.",
    "Mistakes are proof that you’re trying.",
    "Stay curious; the world is full of knowledge.",
    "The only way to do great work is to love what you do.",
    "Your mind is a garden; nurture it with knowledge.",
    "Challenge yourself; that’s where growth happens.",
    "Dream big, study hard, achieve greatness.",
    "The pursuit of knowledge is a noble journey.",
    "Every page turned is a step closer to your goals.",
    "Your attitude determines your direction.",
    "Be relentless in your quest for knowledge.",
    "Celebrate each milestone, no matter how small.",
    "Inspiration comes from within; let it guide your studies.",
    "Education is the key that unlocks potential.",
    "Stay focused; the finish line is within reach.",
    "Your determination today will create your success tomorrow.",
    "Turn your ‘I can’t’ into ‘I can and I will.'",
    "Strive for progress, not perfection.",
    "Let your dreams be your compass in learning.",
    "Knowledge is the foundation of confidence.",
    "Embrace the challenges; they’re your greatest teachers.",
    "Success starts with self-discipline and effort.",
    "Learning is the beginning of wealth—financial, intellectual, and spiritual.",
    "Each study session is a brick in your success.",
    "Be the architect of your dreams through diligent study.",
    "Your future self will thank you for the hard work you put in today.",
    "The more you learn, the more you grow.",
    "Focus on learning, and success will follow.",
    "Every expert was once a beginner.",
    "Set your goals high, and don’t stop until you get there.",
    "Knowledge is the bridge to opportunity.",
    "Perseverance is the key that unlocks potential.",
    "Every question you ask brings you closer to the answer.",
    "Keep pushing; greatness is just around the corner.",
    "Invest in yourself; it pays the best dividends.",
    "The journey of a thousand miles begins with a single step.",
    "Every page you turn is a step closer to your dreams.",
    "Knowledge is the key; study is the path.",
    "Inspiration fuels the fire of learning.",
    "Success is born from dedication and determination.",
    "Dream big, study hard, and achieve greatness.",
    "The more you learn, the more you grow.",
    "Your effort today shapes your future tomorrow.",
    "Challenges are opportunities in disguise; embrace them.",
    "With each study session, you build your legacy.",
    "Transform your struggles into stepping stones for success.",
    "Focus on progress, not perfection.",
    "Every small victory is a building block for success.",
    "Let curiosity be your compass as you explore knowledge.",
    "The journey of a thousand miles begins with a single page.",
    "Believe in your potential; it’s limitless.",
    "Knowledge is empowerment; study to unleash it.",
    "Commit to the process, and the results will follow.",
    "Your mind is a garden; nurture it with knowledge.",
    "Success isn’t a destination but a journey of learning.",
    "Embrace the challenge; it leads to personal growth.",
    "Study with purpose, and the universe will conspire to help you.",
    "Let your passion for learning illuminate your path.",
    "The best investment you can make is in your education.",
    "Fall in love with the process, and success will follow.",
    "Persistence is the key that unlocks the door to success.",
    "Every great achievement starts with a decision to try.",
    "Knowledge is a treasure that no one can take from you.",
    "Your thoughts shape your reality; think success.",
    "Stay focused on your goals, and the distractions will fade.",
    "Each moment spent studying is an investment in your future.",
    "Challenge your limits; that’s where growth happens.",
    "Let your dreams be your motivation to study.",
    "Success is a journey, not a race; take it one step at a time.",
    "Surround yourself with positivity, and watch your potential soar.",
    "Your dedication today creates the opportunities of tomorrow.",
    "In the world of knowledge, persistence is your greatest ally.",
    "Every study session is a step toward your brighter future.",
    "Let your ambition guide you through the toughest subjects.",
    "Invest in your mind; it’s the best asset you’ll ever have.",
    "Embrace the grind; it leads to glorious outcomes.",
    "Your hard work today paves the way for success tomorrow.",
    "Seek knowledge with curiosity, and it will reward you.",
    "Turn struggles into strengths through perseverance.",
    "With every challenge, you become a stronger learner.",
    "Stay hungry for knowledge and quench your thirst with study.",
    "Your potential is boundless; study to unleash it.",
    "Inspiration is the spark; dedication is the fuel.",
    "Every question you ponder is a step toward enlightenment.",
    "The road to success is paved with hours of study.",
    "Believe in yourself, for you’re capable of amazing things.",
    "Every page you turn writes a new chapter in your story.",
    "Your mind is a garden; cultivate it with knowledge.",
    "Growth begins at the edge of your comfort zone.",
    "Focus on progress, not perfection.",
    "Each small step leads to a giant leap in understanding.",
    "The effort you put in today builds the foundation for tomorrow.",
    "Knowledge is the compass that guides your future.",
    "Dream big, study hard, and achieve greatness.",
    "Your dedication today shapes your destiny.",
    "Mistakes are proof that you’re trying; learn from them.",
    "Curiosity is the key that unlocks your potential.",
    "Embrace challenges; they’re the catalysts for growth.",
    "Success is a journey, not a destination.",
    "Inspiration fuels ambition; keep your flame alive.",
    "Determination transforms dreams into achievable goals.",
    "Every question you ask is a step toward wisdom.",
    "Believe in your ability to learn and grow.",
    "Your study time is an investment in your future.",
    "Persistence is the bridge between effort and achievement.",
    "Today’s struggles are tomorrow’s strengths.",
    "Knowledge empowers you to change the world.",
    "Stay curious; the world is full of wonders waiting to be discovered.",
    "Small daily improvements lead to stunning results.",
    "Success isn’t about luck; it’s about hard work.",
    "Each lesson learned is a step closer to your dreams.",
    "Your potential is limitless; tap into it.",
    "The pursuit of knowledge is a lifelong adventure.",
    "Every moment spent studying is a step toward your goals.",
    "Believe in the power of your dreams; they’re worth pursuing.",
    "Your mindset can turn obstacles into opportunities.",
    "Stay focused; distractions are the enemy of progress.",
    "Every effort you make counts; never underestimate it.",
    "Chase knowledge with the same intensity as your dreams.",
    "Hard work often beats talent when talent doesn’t work hard.",
    "The journey of a thousand miles begins with a single study session.",
    "Your hard work today will be a treasure tomorrow.",
    "Be the architect of your own success.",
    "Turn your ‘I can’t’ into ‘I can and I will.’",
    "Knowledge is the light that brightens your path.",
    "Your future is created by what you do today, not tomorrow.",
    "Stay resilient; greatness takes time to build.",
    "Effort is the mother of achievement.",
    "Challenge yourself; growth comes from stepping up.",
    "A positive mindset is the first step to success.",
    "Your determination defines the limits of your potential.",
    "Every study session is a step toward your dream life.",
    "Seek knowledge, and you’ll find the keys to success.",
    "Success is crafted through patience and persistence.",
    "Turn your fears into fuel for your ambition.",
    "The more you learn, the more you grow; embrace the journey."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const chosen = quotes[randomIndex];

  document.getElementById("quote").innerText = chosen;
}

function levelUp(xp) {
  let totalXP = parseInt(localStorage.getItem("xp")) || 0;
  let level = parseInt(localStorage.getItem("level")) || 1;

  totalXP += xp;

  let xpNeeded = level * 10;

  while (totalXP >= xpNeeded) {
    totalXP -= xpNeeded;
    level++;
    xpNeeded = level * 10;
  }

  localStorage.setItem("xp", totalXP);
  localStorage.setItem("level", level);

  document.getElementById("level").innerText = "Level: " + level;
  updateProgressBar(totalXP, xpNeeded);
}

function updateProgressBar(currentXP, xpNeeded) {
  let percentage = (currentXP / xpNeeded) * 100;
  document.getElementById("progress").style.width = percentage + "%";

  document.getElementById("xp-text").innerText = currentXP + " / " + xpNeeded + " XP";
}

levelUp(0);

showRandomQuote();
counting();