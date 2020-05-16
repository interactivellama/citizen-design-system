The ability to style checkboxes with CSS varies across browsers. To ensure that checkboxes look the same everywhere, we use a custom DOM. Pay close attention to the markup, because all elements must exist for the styles to work.

<h4 class="site-text-heading--label">Accessibility</h4>

Groups of checkboxes should be marked up using the fieldset and legend element. This helps someone using assistive technology to understand the question they're answering with the group of checkboxes. The fieldset is placed around the whole group and the legend contains the question.

Custom checkboxes are created by applying the `.{{cssPrefix}}checkbox` class to a `<label>` element. To remain accessible to all user agents, place `<input>` with `type="checkbox"` inside the `<label>` element.  The `<input>` is then visually hidden, and the styling is placed on a span with the `.{{cssPrefix}}checkbox--faux` class. The styling of the span changes based on whether the checkbox is selected or focused by using a pseudo-element. A second span with `.{{cssPrefix}}form-element__label` contains the label text.

When a single checkbox is required, `<div class="slds-checkbox">` should get `<abbr class="required" title="required">*</abbr>` added to the DOM, directly before the `<input type="checkbox" />` for visual indication that the checkbox is required.

When a checkbox group is required, the `<fieldset>` should receive the class `.{{.cssPrefix}}is-required`. The `<legend>` should then get `<abbr class="required" title="required">*</abbr>` added to the DOM for visual indication that the checkbox group is required.
