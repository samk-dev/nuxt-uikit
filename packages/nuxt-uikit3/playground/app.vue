<template>
  <div>
    <h2 class="uk-heading-small uk-font-bold">Nuxt module playground!</h2>

    <a href="https://nuxt.com">Test Scss compilation</a>

    <base-section />

    <span data-uk-icon="icon: heart; ratio: 2" />

    <button
      class="uk-button uk-button-default uk-margin-small-right"
      type="button"
      data-uk-toggle="target: #modal-example"
    >
      Open
    </button>

    <div id="modal-example" data-uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Headline</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="uk-text-right">
          <button
            class="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            Cancel
          </button>
          <button
            class="uk-button uk-button-primary uk-modal-close"
            type="button"
          >
            Save
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
