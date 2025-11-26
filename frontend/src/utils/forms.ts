import showToast from "@utils/toastMessages";

export function formsInit() {
  window.addEventListener("load", () => {
    const formElements = document.querySelectorAll("form.form-layout") as NodeListOf<HTMLFormElement>;

    if (formElements.length > 0) {
      formElements.forEach((form) => {
        form.addEventListener("submit", (event) => formSubmitHandler(event, form));
        const fileInputs = form.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
        fileInputs.forEach((fileInput) => {
          fileInput.addEventListener("change", () => fileInputFieldHandler(fileInput));
        });
      });
    }
  });
}

function fileInputFieldHandler(inputElement: HTMLInputElement) {
  if (!inputElement) return;

  const placeholderElement = inputElement?.closest("label")?.querySelector(".placeholder");

  if (!placeholderElement || !inputElement.files) return;

  if (inputElement.files.length > 0) {
    placeholderElement.querySelector("p")!.textContent =
      "Chosen file: " +
      Array.from(inputElement.files)
        .map((file) => file.name)
        .join(", ");
  } else {
    placeholderElement.querySelector("p")!.textContent = "CV Upload";
  }
}

export async function formSubmitHandler(ev: SubmitEvent, formElement: HTMLFormElement) {
  ev.preventDefault();

  const honeyElement = formElement.querySelector('[name="honeypot_field"]') as HTMLFormElement;
  const honey = (honeyElement?.value || "").trim();
  if (honey) return false;

  const endpoint = formElement.dataset.endpoint;
  const formId = formElement.dataset.formId;
  if (!formId) return showToast("Form ID is missing", "warning");

  const emailEl = formElement.querySelector('input[type="email"], input[name*="email" i]') as HTMLInputElement;
  const nameEl = formElement.querySelector('input[name*="name" i]') as HTMLInputElement;
  if (emailEl && !emailEl.value.trim()) {
    showToast("Enter email", "warning");
    emailEl?.focus();
    return false;
  }
  if (nameEl && !nameEl.value.trim()) {
    showToast("Enter your name", "warning");
    nameEl?.focus();
    return false;
  }

  const checkboxes = formElement.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
  const checkedBoxes = formElement.querySelectorAll('input[type="checkbox"]:checked');
  if (checkboxes.length > 0 && checkedBoxes.length === 0) {
    showToast("Please select at least one option", "warning");
    checkboxes[0]?.focus();
    return false;
  }

  const fileInputs = formElement.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
  const hasFileInputs = fileInputs.length > 0;
  const hasSelectedFile = [...fileInputs].some((i) => (i.files?.length ? i.files.length : 0 > 0));
  if (hasFileInputs && !hasSelectedFile) {
    showToast("Please upload a file before submitting", "warning");
    fileInputs[0]?.focus();
    return false;
  }

  const fd = new FormData();
  fd.append("form", formId);

  const inputs = formElement.querySelectorAll(
    'input[type="text"], input[type="email"], textarea',
  ) as NodeListOf<HTMLInputElement>;
  for (const el of inputs) {
    const name = el.name?.trim();
    if (!name) continue;
    const val = el.value?.trim();
    if (val) fd.append(`submission[${name}]`, val);
  }

  for (const cb of checkboxes) {
    const name = cb.name?.replace("[]", "").trim();
    if (!name) continue;
    if (cb.checked) fd.append(`submission[${name}][]`, cb.value ?? "on");
  }

  for (const inp of fileInputs) {
    const name = inp.name?.trim();
    if (!name || !inp.files) continue;
    for (const f of inp.files) {
      fd.append(`files[${name}]`, f, f.name);
    }
  }

  const btn = formElement.querySelector('button[type="submit"]');
  btn?.setAttribute("disabled", "true");
  showToast("Sending...");

  try {
    if (!endpoint) return;

    const res = await fetch(endpoint, { method: "POST", body: fd });
    if (!res.ok) throw new Error(await res.text());
    formElement.reset();
    showToast(formElement.dataset.successMessage, "success");
  } catch (err) {
    console.error(err);
    showToast(formElement.dataset.errorMessage, "error");
  } finally {
    btn?.removeAttribute("disabled");
  }

  return false;
}
