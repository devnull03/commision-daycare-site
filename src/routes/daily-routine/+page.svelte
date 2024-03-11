<script lang="ts">
  const schedule = [
    {
      startTime: "7:00 AM",
      endTime: "7:30 AM",
      activity: "Drop off and Welcome",
    },
    {
      startTime: "7:30 AM",
      endTime: "8:00 AM",
      activity: "Breakfast (if needed)",
    },
    {
      startTime: "8:00 AM",
      endTime: "9:00 AM",
      activity: "Open end free play",
    },
    {
      startTime: "9:00 AM",
      endTime: "9:25 AM",
      activity: "Music dance time",
    },
    {
      startTime: "9:25 AM",
      endTime: "9:30 AM",
      activity: "Washroom time and hand washing",
    },
    {
      startTime: "9:30 AM",
      endTime: "10:00 AM",
      activity: "Snack time",
    },
    {
      startTime: "10:00 AM",
      endTime: "10:30 AM",
      activity: "Circle time with songs and stories",
    },
    {
      startTime: "10:30 AM",
      endTime: "10:50 AM",
      activity: "Art and craft",
    },
    {
      startTime: "10:50 AM",
      endTime: "11:00 AM",
      activity: "Washroom time",
    },
    {
      startTime: "11:00 AM",
      endTime: "11:50 AM",
      activity: "Outdor play",
    },
    {
      startTime: "11:50 AM",
      endTime: "12:00 PM",
      activity: "Handwashing and getting ready for lunch",
    },
    {
      startTime: "12:00 PM",
      endTime: "12:30 PM",
      activity: "Lunch",
    },
    {
      startTime: "12:30 PM",
      endTime: "12:45 PM",
      activity: "Book time",
    },
    {
      startTime: "12:45 PM",
      endTime: "3:00 PM",
      activity: "Nap time and quite time",
    },
    {
      startTime: "3:00 PM",
      endTime: "3:30 PM",
      activity: "Wake time and snack time",
    },
    {
      startTime: "3:30 PM",
      endTime: "4:30 PM",
      activity: "Group activity or physical activity",
    },
    {
      startTime: "4:30 PM",
      endTime: "5:15 PM",
      activity: "Outdoor play",
    },
    {
      startTime: "5:15 PM",
      endTime: "6:00 PM",
      activity: "Free play",
    },
    {
      startTime: "6:00 PM",
      activity: "Pick up and good bye",
    },
  ];
</script>

<main class="flex flex-col gap-24 py-16 h-full">
  <div
    class="flex flex-col justify-evenly p-16 mx-24 lg:mx-48 bg-[#D9D9D952] backdrop-blur-[30px] rounded-xl"
  >
    <p
      class=" text-[#000000C9] text-center text-4xl font-bold rounded-t-xl pb-8"
    >
      Daily Routine
    </p>

    <div class="flex flex-col">
      {#each schedule as item}
        <div
          class="flex lg:flex-row flex-col items-center w-full lg:gap-20 odd:bg-black odd:bg-opacity-10 rounded-lg"
        >
          <div
            class="flex py-4 text-[#000000C9] text-2xl font-bold gap-4 lg:justify-end justify-center min-w-[20%] whitespace-nowrap"
          >
            <span>{item.startTime}</span>
            {#if item.endTime}
              -
              <span>{item.endTime}</span>
            {/if}
          </div>

          <p
            class="text-[#1E1E1E80] text-2xl text-center whitespace-normal break-words"
          >
            {item.activity}
          </p>
        </div>
      {/each}
    </div>
  </div>
</main>
