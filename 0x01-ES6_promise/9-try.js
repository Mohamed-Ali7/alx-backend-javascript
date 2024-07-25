export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (reason) {
    queue.push(`Error: ${reason.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
