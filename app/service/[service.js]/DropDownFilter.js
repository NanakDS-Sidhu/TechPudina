

export default function DropDownFilter(props) {
  return (
    <div className="flex flex-col p-4 py-2">
      <label className="mr-2 text-emerald-900 text-lg font-medium" htmlFor="role">{props.label}</label>
        <select className=" bg-teal-700 text-white rounded-md focus:border-white p-2"  name="role" id="role">
          <option value="Client">Client</option>
          <option value="Service Provider">Service Provider</option>
        </select>
    </div>
  )
}
