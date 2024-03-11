<script lang="ts">
  let name: string;
  let email: string;
  let phone: string;
  let message: string;

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    const data = {
      name,
      email,
      phone,
      subject: `New Care and Fun Contact Request - ${name}`,
      honeypot: "",
      message,
      replyTo: "@",
      accessKey: import.meta.env.VITE_FORM_ACCESS_KEY,
    };

    fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert("Message sent successfully!");
        } else {
          alert("Message failed to send.");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
</script>

<main class="flex flex-col gap-24 py-16 h-full">
  <div
    class="flex flex-col justify-evenly gap-10 py-16 px-28 mx-48 bg-[#D9D9D952] backdrop-blur-[30px] rounded-xl text-[#000000C9] text-xl"
  >
    <p class="text-center text-4xl font-bold rounded-t-xl pb-8">Contact</p>

    <div class="">
      <p>Harpreet Kaur (Manager)</p>
      <p>Email - careandfunchildcare@gmail.com Phone</p>
      <p>Number - 604-832-0375</p>
    </div>

    <div class="">
      <p>Hours of operation :</p>
      <p>Monday to Friday 7:00 am - 5:30 pm</p>
      <p>CLOSED on all statutory holidays (closure posted in advance)</p>
    </div>

    <form
      on:submit={handleSubmit}
      class="flex gap-10 *:flex *:flex-col *:gap-4"
    >
      <div class="items-end *:p-2">
        <label for="name">Name</label>
        <label for="email">Email</label>
        <label for="phone">Phone</label>
        <label for="message">Message</label>
      </div>

      <div class="*:rounded-lg *:p-2 *:px-4 w-full">
        <input type="text" id="name" placeholder="Name" bind:value={name} />
        <input type="email" id="email" bind:value={email} />
        <input type="tel" id="phone" bind:value={phone} />
        <textarea id="message" bind:value={message} />
        <input type="submit" value="Submit" class="cursor-pointer" />
      </div>
    </form>
  </div>
</main>
