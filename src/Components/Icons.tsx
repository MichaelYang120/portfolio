import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Icons(iconName:any, iconColor:string, iconHeight:string) {

	return (
		<>
			<FontAwesomeIcon style={{color:iconColor, height:iconHeight}} icon={iconName} />
		</>	
	)
}

export function typescriptIcon(iconHeight:string) {
	const iconscoutstyle = {
		height:iconHeight
	}

	return (
		
		<>
			<svg style={iconscoutstyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="typescript"><path fill="#007acc" d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"></path></svg>

		</>
	)
}

export function jqueryIcon(iconHeight:string) {
	const iconscoutstyle = {
		height:iconHeight
	}

	return (
		<>
			<svg style={iconscoutstyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="jquery"><path fill="#0868AC" d="M47.961 79.02l.193.094.344.166c.439.209.882.416 1.329.615l.281.125c.513.225 1.029.439 1.551.645l.378.148c.482.188.972.37 1.463.543l.184.063c.539.188 1.083.363 1.632.534l.395.117c.558.169 1.109.37 1.685.477 36.554 6.665 47.171-21.967 47.171-21.967-8.918 11.618-24.747 14.683-39.745 11.271-.568-.128-1.12-.306-1.674-.47l-.417-.126c-.541-.166-1.079-.341-1.612-.524l-.221-.08c-.478-.168-.951-.346-1.421-.527l-.398-.156c-.516-.203-1.028-.416-1.534-.638l-.307-.136c-.435-.197-.866-.396-1.294-.602l-.375-.18c-.336-.164-.669-.339-1.001-.51l-.668-.35c-.405-.217-.803-.442-1.199-.673l-.405-.226c-.527-.311-1.048-.632-1.563-.958l-.421-.28c-.374-.241-.746-.486-1.112-.739l-.358-.252c-.354-.25-.704-.503-1.051-.76l-.466-.353c-.318-.243-.635-.488-.948-.74l-.423-.34c-.398-.328-.792-.657-1.182-.995l-.129-.109c-.423-.368-.836-.747-1.244-1.127l-.35-.337c-.303-.287-.6-.577-.893-.874l-.35-.35c-.372-.381-.737-.767-1.095-1.158l-.054-.058c-.379-.414-.749-.837-1.111-1.264l-.291-.346c-.27-.325-.538-.655-.799-.988l-.293-.364c-.315-.408-.622-.815-.923-1.229-8.326-11.358-11.318-27.023-4.663-39.888l-5.899 7.482c-7.559 10.863-6.617 24.997-.844 36.541l.423.821.271.52.168.299.301.539c.179.316.362.63.55.944l.315.519c.208.336.421.668.64 1l.272.422c.301.448.609.896.926 1.336l.027.035.156.211c.275.379.558.753.844 1.123l.318.404c.255.321.516.641.78.959l.298.355c.355.419.717.835 1.087 1.242l.022.023.042.046c.36.394.73.778 1.104 1.164l.354.357c.29.292.584.579.882.865l.361.343c.397.374.798.741 1.208 1.101l.02.015.21.18c.361.312.729.623 1.099.928l.455.362c.302.242.608.481.916.716l.489.372c.34.25.682.496 1.027.737l.375.266.103.073c.328.226.663.442.998.659l.432.288c.513.325 1.035.646 1.562.956l.432.244c.388.223.777.442 1.172.656l.648.336.84.437zM51.654 42.225c.819 1.174 1.726 2.57 2.813 3.514.394.434.806.856 1.226 1.273l.324.318c.409.396.824.785 1.252 1.164l.052.044.012.013c.475.416.965.816 1.463 1.21l.333.26c.5.383 1.009.759 1.531 1.118l.045.033.698.46.332.22c.373.238.75.472 1.135.694l.16.093c.331.191.667.379 1.003.561l.356.187.702.363.106.048c.482.237.968.465 1.464.682l.323.133c.396.168.797.333 1.199.487l.514.188c.366.136.732.26 1.102.383l.499.16c.526.163 1.045.369 1.593.46 28.222 4.677 34.738-17.054 34.738-17.054-5.874 8.459-17.248 12.494-29.386 9.344-.539-.142-1.071-.295-1.598-.462l-.481-.155c-.375-.121-.748-.25-1.118-.385l-.504-.188c-.405-.156-.807-.317-1.204-.485l-.324-.138c-.498-.217-.989-.445-1.472-.685l-.739-.376-.426-.219c-.314-.17-.626-.348-.934-.527l-.223-.127c-.383-.223-.759-.453-1.132-.689l-.341-.229-.732-.484c-.521-.359-1.027-.734-1.525-1.115l-.343-.271c-5.313-4.193-9.524-9.927-11.527-16.428-2.098-6.74-1.646-14.308 1.989-20.449l-4.466 6.306c-5.466 7.865-5.169 18.396-.905 26.715.714 1.393 1.517 2.747 2.416 4.035zM81.401 32.494l.701.243.309.098c.333.104.662.226 1.005.29 15.583 3.011 19.811-7.997 20.936-9.617-3.703 5.331-9.925 6.61-17.56 4.757-.603-.146-1.266-.363-1.848-.57-.745-.266-1.479-.568-2.193-.91-1.356-.652-2.648-1.441-3.846-2.347-6.832-5.185-11.076-15.072-6.618-23.126l-2.412 3.324c-3.222 4.743-3.539 10.633-1.303 15.869 2.358 5.56 7.19 9.92 12.829 11.989zM66.359 96.295h-4.226c-.234 0-.467.188-.517.417l-1.5 6.94-1.5 6.94c-.049.229-.282.417-.516.417h-2.991c-2.959 0-2.617-2.047-2.011-4.851l.018-.085.066-.354.012-.066.135-.72.145-.771.154-.785.682-3.332.683-3.332c.047-.23-.107-.419-.341-.419h-4.337c-.234 0-.466.188-.514.418l-.933 4.424-.932 4.425-.002.006-.086.412c-1.074 4.903-.79 9.58 5.048 9.727l.17.003h9.163c.234 0 .467-.188.516-.417l1.976-9.289 1.976-9.29c.049-.23-.103-.417-.338-.418zM21.103 96.246h-4.64c-.235 0-.469.188-.521.416l-.44 1.942-.44 1.942c-.051.229.098.416.333.416h4.676c.235 0 .468-.188.518-.417l.425-1.941.425-1.941c.049-.229-.101-.417-.336-.417zM19.757 102.29h-4.677c-.234 0-.469.188-.521.416l-.657 2.91-.656 2.909-.183.834-.631 2.97-.63 2.971c-.049.229-.15.599-.225.821 0 0-.874 2.6-2.343 2.57l-.184-.004-1.271-.023h-.001c-.234-.003-.469.18-.524.407l-.485 2.039-.484 2.038c-.055.228.093.416.326.42.833.01 2.699.031 3.828.031 3.669 0 5.604-2.033 6.843-7.883l1.451-6.714 1.361-6.297c.049-.227-.103-.415-.337-.415zM105.874 100.716l-.194-.801-.191-.82-.097-.414c-.38-1.477-1.495-2.328-3.917-2.328l-3.77-.004-3.472-.005h-3.907c-.234 0-.466.188-.515.417l-.173.816-.204.964-.057.271-1.759 8.24-1.67 7.822c-.05.23-.066.512-.038.626.028.115.479.209.713.209h3.524c.235 0 .532-.042.66-.094s.317-.513.364-.742l.626-3.099.627-3.1.001-.005.084-.413.76-3.56.671-3.144c.05-.229.281-.416.515-.417l11.089-.005c.235.002.383-.185.33-.414zM120.149 93.476l-.854.003h-3.549c-.235 0-.536.159-.667.353l-7.849 11.498c-.132.194-.283.166-.335-.062l-.578-2.533c-.052-.229-.287-.416-.522-.416h-5.045c-.235 0-.374.184-.31.409l2.261 7.921c.064.226.069.596.011.824l-.985 3.833c-.059.228.085.413.32.413h4.987c.234 0 .474-.186.532-.413l.986-3.833c.058-.229.221-.567.363-.755l12.742-16.911c.142-.188.065-.341-.169-.339l-1.339.008zM80.063 103.395v-.004c-.029.254-.264.441-.499.441h-6.397c-.222 0-.334-.15-.301-.336l.006-.015-.004.002.003-.021.029-.109c.611-1.624 1.855-2.69 4.194-2.69 2.634-.001 3.148 1.285 2.969 2.732zm-1.877-7.384c-8.211 0-10.157 4.984-11.249 10.015-1.091 5.128-.998 9.921 7.5 9.921h1.03l.256-.001h.06l1.02-.003h.018c2.244-.009 4.495-.026 5.406-.033.233-.004.461-.191.509-.42l.344-1.681.067-.327.41-2.006c.047-.229-.106-.418-.341-.418h-7.639c-3.039 0-3.941-.807-3.608-3.181h12.211l-.001.001.008-.001c.194-.003.374-.137.445-.315l.029-.106-.001.001c1.813-6.839 1.293-11.445-6.474-11.446zM39.376 103.369l-.116.409v.001l-.922 3.268-.922 3.267c-.063.227-.308.411-.543.411h-4.88c-3.702 0-4.604-2.896-3.702-7.166.901-4.368 2.668-7.083 6.312-7.358 4.98-.376 5.976 3.126 4.773 7.168zm3.348 7.105s2.301-5.588 2.823-8.814c.713-4.319-1.45-10.585-9.804-10.585-8.306 0-11.914 5.981-13.29 12.484-1.376 6.55.427 12.293 8.686 12.246l6.516-.024 6.089-.022c.234-.002.474-.188.534-.414l1.061-4.046c.059-.228-.084-.414-.319-.416l-1.017-.006-1.017-.006c-.199-.001-.313-.131-.289-.302l.027-.095zM83.844 106.733c0 .155-.125.281-.28.281-.154 0-.28-.126-.28-.281 0-.154.125-.279.28-.279.155 0 .28.125.28.279z"></path></svg>
		</>
	)
}

export function mysqlIcon(iconHeight:string) {
	const iconscoutstyle = {
		height:iconHeight
	}

	return (
		<>
			<svg style={iconscoutstyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="mysql"><path fill="#00618A" d="M2.001 90.458h4.108v-16.223l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108v-16.196c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976-1.304.395-1.936 1.159-1.936 2.739v16.197zM33.899 77.252h4.107v8.938c-.038.485.156 1.625 2.406 1.661 1.148.018 8.862 0 8.934 0v-10.643h4.117c.019 0-.004 14.514-.004 14.574.022 3.58-4.441 4.357-6.499 4.417h-12.972v-2.764c.022 0 12.963.003 12.995-.001 2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85-.002-.187.089-9.129-.001-9.219z"></path><path fill="#E48E00" d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738h-11.535c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025 1.304.105 1.856.343 2.252.816.237.237.315.475.315.737v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58l-.435.026h-11.338v2.738zM100.511 85.692c0 2.817 2.094 4.397 6.32 4.714.395.026.79.052 1.185.052h10.706v-2.738h-10.784c-2.41 0-3.318-.606-3.318-2.055v-14.168h-4.108v14.195zM77.503 85.834v-9.765c0-2.48 1.742-3.985 5.186-4.46.356-.053.753-.079 1.108-.079h7.799c.396 0 .752.026 1.147.079 3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956-3.296.209h-4.395c-.752 0-1.543-.105-2.414-.343-2.613-.712-3.88-2.085-3.88-4.355zm4.434-.237c0 .132.039.265.079.423.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288z"></path><path fill="#00618A" d="M122.336 66.952c-2.525-.069-4.454.166-6.104.861-.469.198-1.216.203-1.292.79.257.271.297.674.502 1.006.394.637 1.059 1.491 1.652 1.938.647.489 1.315 1.013 2.011 1.437 1.235.754 2.615 1.184 3.806 1.938.701.446 1.397 1.006 2.082 1.509.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503 1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867-1.607-1.369-3.363-2.737-5.17-3.879-1.002-.632-2.241-1.043-3.304-1.579-.356-.181-.984-.274-1.221-.575-.559-.711-.862-1.612-1.293-2.441-.9-1.735-1.786-3.631-2.585-5.458-.544-1.245-.9-2.473-1.579-3.59-3.261-5.361-6.771-8.597-12.208-11.777-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077-1.802-1.138-6.422-3.613-7.756-.358-.842 2.054 1.26 4.058 2.011 5.099.527.73 1.203 1.548 1.58 2.369.248.54.29 1.081.503 1.652.521 1.406.976 2.937 1.651 4.236.341.658.718 1.351 1.149 1.939.264.36.718.52.789 1.077-.443.62-.469 1.584-.718 2.369-1.122 3.539-.699 7.938.934 10.557.501.805 1.681 2.529 3.303 1.867 1.419-.578 1.103-2.369 1.509-3.95.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646-.562-.551-1.187-1.235-1.651-1.867-1.309-1.776-2.465-3.721-3.519-5.745-.503-.966-.94-2.032-1.364-3.016-.164-.379-.162-.953-.502-1.148-.466.72-1.149 1.303-1.509 2.154-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154-.94-2.233-1.115-5.83-.287-8.401.214-.666 1.181-2.761.789-3.376-.187-.613-.804-.967-1.148-1.437-.427-.579-.854-1.341-1.149-2.011-.77-1.741-1.129-3.696-1.938-5.457-.388-.842-1.042-1.693-1.58-2.441-.595-.83-1.262-1.44-1.724-2.442-.164-.356-.387-.927-.144-1.293.077-.247.188-.35.432-.431.416-.321 1.576.107 2.01.287 1.152.479 2.113.934 3.089 1.58.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358 1.67.508 3.166 1.297 4.524 2.155 4.139 2.614 7.522 6.334 9.838 10.772.372.715.534 1.396.861 2.154.662 1.528 1.496 3.101 2.154 4.596.657 1.491 1.298 2.996 2.227 4.237.488.652 2.374 1.002 3.231 1.364.601.254 1.585.519 2.154.861 1.087.656 2.141 1.437 3.16 2.155.509.362 2.076 1.149 2.154 1.798zM90.237 39.593c-.526-.01-.899.058-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508.071-.071c.445-.313.648-.814.646-1.58-.179-.188-.205-.423-.359-.646-.204-.3-.602-.468-.861-.719z"></path></svg>
		</>
	)
}

export function phpIcon(iconHeight:string) {
	const iconscoutstyle = {
		height:iconHeight
	}

	return (
		<>
			<svg style={iconscoutstyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="php"><path fill="#6181B6" d="M64 33.039c-33.74 0-61.094 13.862-61.094 30.961s27.354 30.961 61.094 30.961 61.094-13.862 61.094-30.961-27.354-30.961-61.094-30.961zm-15.897 36.993c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.311 2.968l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528l-3.031 15.241h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zM38.934 54h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458s-2.772-1.721-5.546-1.721z"></path></svg>
		</>
	)
}

export function reactIcon(iconHeight:string) {
	const iconscoutstyle = {
		height:iconHeight
	}

	return (
		<>
			<svg style={iconscoutstyle} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128" id="react"><g fill="#61DAFB"><circle cx="64" cy="47.5" r="9.3"></circle><path d="M64 81.7c7.3 7.1 14.5 11.3 20.3 11.3 1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3-7.2-7.1-14.4-11.3-20.2-11.3-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zm-12.4-10.3c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zm-14.7 20.1c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zm-28.7-19.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7c-11.2-3.2-17.9-8.1-17.9-12.6 0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zM33.6 112.3c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0h-.7v25.9h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zM57.7 113.4c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zm-15.1 1.6c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2h-12.3zM73.3 106.3c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zM90.3 109c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zM111.1 122.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.799999999999999c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path></g></svg>
		</>
	)
}

export function javascriptIcon(iconHeight:string) {
	const iconscoutstyle = {
		height:iconHeight
	}

	return (
		<>
			<svg style={iconscoutstyle} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 256" id="javascript"><path fill="#F7DF1E" d="M0 0h256v256H0V0z"></path><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path></svg>
		</>
	)
}

export function linkedinIcon(iconHeight:string) {
	const iconscoutstyle = {
		height:iconHeight
	}

	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" style={iconscoutstyle} viewBox="0 0 72 72" id="linkedin"><g fill="none" fill-rule="evenodd"><rect width="72" height="72" fill="#117EB8" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></svg>
		</>
	)
}

export function githubIcon(iconHeight:string) {
	const iconscoutstyle = {
		height:iconHeight
	}

	return (
		<>
			<svg style={iconscoutstyle} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
		</>
	)
}

export function emailIcon(iconHeight:string) {
	const iconscoutstyle = {
		height:iconHeight,
		marginBottom:"5px"
	}

	return (
		<>
			<svg style={iconscoutstyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96" id="email"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" data-name="Layer 2"></path></svg>
		</>
	)
}