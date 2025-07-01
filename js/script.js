// Form validation
const form = document.getElementById('entire-form');
const submitBtn = form.querySelector('button[type="button"]');

submitBtn.addEventListener('click', function (e) {
    const fname = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('pass').value.trim();
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value.trim();
    const gender = form.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;

    if (fname === "") {
        alert("First name is required.");
        return;
    }

    if (email === "" || !validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (dob === "") {
        alert("Date of Birth is required.");
        return;
    }

    if (phone !== "" && !/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    if (country === "none") {
        alert("Please select a country.");
        return;
    }

    alert("Form submitted successfully!");
    form.submit();
});

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
