// Get the table rows
const rows = document.querySelectorAll('tbody tr');

// Add event listeners to input elements to update subtotals
rows.forEach(row => {
	const input = row.querySelector('input');
	input.addEventListener('input', () => {
		updateSubtotal(row);
	});
});

// Update the subtotal for a row
function updateSubtotal(row) {
	const price = parseFloat(row.querySelector('td:nth-child(2)').textContent.replace('#', ''));
	const quantity = parseInt(row.querySelector('input').value);
	const subtotal = price * quantity;
	row.querySelector('td:nth-child(4)').textContent = '#' + subtotal.toFixed(2);
	
	updateTotal();
}

// Update the total
function updateTotal() {
	const subtotals = Array.from(rows).map(row => {
		return parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('#', ''));
	});
	const total = subtotals.reduce((sum, value) => sum + value, 0);
	document.querySelector('tfoot td:last-child').textContent = '#' + total.toFixed}
