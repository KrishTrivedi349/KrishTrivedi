const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})
window.addEventListener("load", function () {
  var image = document.querySelector(".locate");
  image.classList.add("animated3");
});
window.addEventListener("load", function () {
  const domesticListItem = document.getElementById("domestic");
  domesticListItem.addEventListener("mouseover", function () {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "orange",
      "purple",
    ];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    domesticListItem.style.backgroundColor = randomColor;
  });
  domesticListItem.addEventListener("mouseout", function () {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "orange",
      "purple",
    ];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    domesticListItem.style.backgroundColor = randomColor;
  });
});
window.addEventListener("load", function () {
	const officeListItem = document.getElementById("office");
	officeListItem.addEventListener("mouseover", function () {
		const colors = ["#FF00FF", "#00FFFF", "#800080", "#FFD700", "#2F4F4F"];

		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		officeListItem.style.backgroundColor = randomColor;
	});
	officeListItem.addEventListener("mouseout", function () {
		const colors = ["#FF00FF", "#00FFFF", "#800080", "#FFD700", "#2F4F4F"];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		officeListItem.style.backgroundColor = randomColor;
	});
});
window.addEventListener("load", function () {
  const carpetListItem = document.getElementById("rug");
  carpetListItem.addEventListener("mouseover", function () {
    const colors = ["#800020", "#1E90FF", "#FF69B4", "#FF7856"];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    carpetListItem.style.backgroundColor = randomColor;
  });
  carpetListItem.addEventListener("mouseout", function () {
    const colors = ["#800020", "#1E90FF", "#FF69B4", "#FF7856"];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    carpetListItem.style.backgroundColor = randomColor;
  });
});
window.addEventListener("load", function () {
  const windowListItem = document.getElementById("window");
  windowListItem.addEventListener("mouseover", function () {
    const colors = ["#800020", "#1E90FF", "#FF69B4", "#FF7856"];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    windowListItem.style.backgroundColor = randomColor;
  });
  windowListItem.addEventListener("mouseout", function () {
    const colors = ["#800020", "#1E90FF", "#FF69B4", "#FF7856"];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    windowListItem.style.backgroundColor = randomColor;
  });
});
window.addEventListener("load", function () {
  const deepListItem = document.getElementById("deep");
  deepListItem.addEventListener("mouseover", function () {
    const colors = ["#800020", "#1E90FF", "#FF69B4", "#FF7856"];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    deepListItem.style.backgroundColor = randomColor;
  });
  deepListItem.addEventListener("mouseout", function () {
    const colors = ["#800020", "#1E90FF", "#FF69B4", "#FF7856"];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    deepListItem.style.backgroundColor = randomColor;
  });
});
window.addEventListener("load", function () {
  const endListItem = document.getElementById("end");
  endListItem.addEventListener("mouseover", function () {
    const colors = ["#800020", "#1E90FF", "#FF69B4", "#FF7856"];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    endListItem.style.backgroundColor = randomColor;
  });
  endListItem.addEventListener("mouseout", function () {
    const colors = ["#800020", "#1E90FF", "#FF69B4", "#FF7856"];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    endListItem.style.backgroundColor = randomColor;
  });
});
window.addEventListener("load", function () {
  var image = document.querySelector(".image");
  image.classList.add("animated");
});
window.addEventListener("load", function () {
  var image = document.querySelector(".image2");
  image.classList.add("animated2");
});
window.addEventListener("load", function () {
  var image = document.querySelector(".image3");
  image.classList.add("animated3");
});
window.addEventListener("load", function () {
  const images = document.querySelector(".image-container");

  images.addEventListener("mouseover", function () {
    const colors = [
      "#800020",
      "#1E90FF",
      "#FF69B4",
      "#FF7856",
      "#800080",
    ];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    images.style.backgroundColor = randomColor;
  });
});
window.addEventListener("load", function () {
  images.addEventListener("mouseout", function () {
    const colors = [
      "#800020",
      "#1E90FF",
      "#FF69B4",
      "#FF7856",
      "#800080",
    ];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    images.style.backgroundColor = randomColor;
  });
});
window.addEventListener("load", function () {
  var image = document.querySelector(".clock");
  image.classList.add("animated2");
});
window.addEventListener("load", function () {
  var image = document.querySelector(".support");
  image.classList.add("animated5");
});
var image4 = document.querySelector(".consumer");
{
  image4.classList.add("animated5");
}
window.addEventListener("load", function () {
  const performanceSection = document.querySelector(".Performance");

  performanceSection.addEventListener("mouseover", function () {
    const colors = [
      "#800020",
      "#1E90FF",
      "#FF69B4",
      "#FF7856",
      "#800080",
    ];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    performanceSection.style.backgroundColor = randomColor;
  });
  var image1 = document.querySelector(".time");
  {
    image1.classList.add("animated3");
  }

  var image2 = document.querySelector(".locate");
  {
    image2.classList.add("animated");
  }
});
window.addEventListener("load", function () {
  const nameInput = document.getElementById("name-input");
  const helloMessage = document.getElementById("hello-message");

  nameInput.addEventListener("input", function () {
    const name = nameInput.value;
    helloMessage.textContent = `Hello, ${name} 😀check out our services page to see what are the exceptional services we offer `;
  });
});
window.addEventListener("load", function () {
  const emailInput = document.getElementById("email-input");
  const helloMessage = document.getElementById("email-message");

  emailInput.addEventListener("blur", function () {
    let email = emailInput.value.trim();
    // validate email with a regular expression
    const validEmailFormat = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!validEmailFormat.test(email)) {
      helloMessage.textContent = `Please enter a valid email address.`;
    } else {
      if (
        email.endsWith("@gmail.com") ||
        email.endsWith("@outlook.com") ||
        email.endWith("@yahoo.com")
      ) {
        helloMessage.textContent = `Hello, 😎 ${email}  Look forward to connecting with you regarding my availability and the overall job procedures :)`;
      } else {
        let autoEmail = `${email}@gmail.com`;
        helloMessage.textContent = `Hello, ${autoEmail} Look forward to connecting with you regarding my availability and the overall job procedures :)`;
      }
    }
  });
});

const messageInput = document.getElementById("message-input");
					const charCount = document.getElementById("char-count");

					messageInput.addEventListener("input", () => {
						const messageLength = messageInput.value.length;
						charCount.textContent = `${messageLength} characters`;
});
window.addEventListener("load", function () {
  var box = document.querySelector(".footExpert");

  box.addEventListener("mouseover", function () {
    var fontFamilies = [
      "Times New Roman",
      "Arial",
      "Verdana",
      "Georgia",
      "Courier New",
      "Comic Sans MS",
    ];
    box.style.fontFamily =
      fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
  });
});
function formatPhoneInput(input) {
  const cleanedValue = input.value.replace(/\D/g, "");
  const regex = /^(\d{3})(\d{3})(\d{4})(\d*)$/;
  input.value = cleanedValue.replace(regex, "($1) $2-$3 $4");
}


