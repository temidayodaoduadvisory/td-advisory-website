import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useForm } from "@formspree/react";
import { Contact } from "./App";

const toastMock = vi.fn();
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({ toast: toastMock }),
}));

vi.mock("@formspree/react", () => ({
  useForm: vi.fn(),
}));

const mockedUseForm = vi.mocked(useForm);

type FormState = ReturnType<typeof useForm>[0];

/** Drive the mocked Formspree hook and return the submit handler spy. */
function setFormState(overrides: Partial<FormState> = {}) {
  const handleSubmit = vi.fn(async (event?: { preventDefault?: () => void }) => {
    event?.preventDefault?.();
  });
  const state = {
    submitting: false,
    succeeded: false,
    errors: null,
    result: null,
    ...overrides,
  } as FormState;
  mockedUseForm.mockReturnValue([state, handleSubmit, vi.fn()] as unknown as ReturnType<typeof useForm>);
  return handleSubmit;
}

const noop = () => {};

describe("Contact form (Formspree)", () => {
  beforeEach(() => {
    toastMock.mockClear();
    mockedUseForm.mockReset();
  });

  it("renders all labelled, required fields in the message tab", () => {
    setFormState();
    render(<Contact activeTab="message" onTabChange={noop} />);

    expect(screen.getByLabelText("Full Name")).toBeRequired();
    expect(screen.getByLabelText("Company")).toBeInTheDocument();
    const email = screen.getByLabelText("Work Email");
    expect(email).toBeRequired();
    expect(email).toHaveAttribute("type", "email");
    expect(screen.getByLabelText("Brief Description of Needs")).toBeRequired();
    expect(screen.getByRole("button", { name: /submit enquiry/i })).toBeEnabled();
  });

  it("submits through the Formspree handler", () => {
    const handleSubmit = setFormState();
    render(<Contact activeTab="message" onTabChange={noop} />);

    const form = screen.getByRole("button", { name: /submit enquiry/i }).closest("form");
    expect(form).not.toBeNull();
    fireEvent.submit(form!);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("carries interest and subject as hidden fields for Formspree", () => {
    setFormState();
    const { container } = render(<Contact activeTab="message" onTabChange={noop} />);

    expect(container.querySelector('input[type="hidden"][name="interest"]')).toBeInTheDocument();
    expect(container.querySelector('input[type="hidden"][name="_subject"]')).toBeInTheDocument();
  });

  it("shows the success state and hides the form once submission succeeds", () => {
    setFormState({ succeeded: true });
    render(<Contact activeTab="message" onTabChange={noop} />);

    expect(screen.getByText("Message received.")).toBeInTheDocument();
    expect(screen.queryByLabelText("Full Name")).not.toBeInTheDocument();
  });

  it("disables the button and shows progress while submitting", () => {
    setFormState({ submitting: true });
    render(<Contact activeTab="message" onTabChange={noop} />);

    expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled();
  });

  it("raises a destructive toast when submission errors", () => {
    setFormState({ errors: {} as FormState["errors"] });
    render(<Contact activeTab="message" onTabChange={noop} />);

    expect(toastMock).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Something went wrong.", variant: "destructive" }),
    );
  });

  it("shows the booking iframe (not the form) on the book tab", () => {
    setFormState();
    render(<Contact activeTab="book" onTabChange={noop} />);

    expect(screen.getByTitle(/book a consultation/i)).toBeInTheDocument();
    expect(screen.queryByLabelText("Full Name")).not.toBeInTheDocument();
  });
});
